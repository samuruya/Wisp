import { createContext, useCallback, useState } from "react";
import { baseURL, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        tag: "",
        email: "",
        password: "",
    });
    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])

    const registerUser = useCallback(async(e) => {
        e.preventDefault()
        setIsRegisterLoading(true)
        setRegisterError(null)
        const res = await postRequest(
            `${baseURL}/users/register`,
            JSON.stringify(registerInfo),
        )

        setIsRegisterLoading(false)

        if(res.error){
            return setRegisterError(res)
        }

        localStorage.setItem("User", JSON.stringify(res))
        setUser(res)
    }, [registerInfo])

    return <AuthContext.Provider value={{
                user,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegisterLoading,
            }}>
                {children}
            </AuthContext.Provider>
}