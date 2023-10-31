import { createContext, useState, useEffect } from "react";
import {  baseURL, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            const res = await getRequest(`${baseURL}/users`);
            if(res.error) return console.log("Error fetching users", res)

            const pChats = res.filter((u) => {
                let isChatCreated = false
                if(user?._id === u._id) return false

                if(userChats){
                    isChatCreated = userChats?.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id 
                    })
                }

                return !isChatCreated;

            })
            setPotentialChats(pChats)
        }

        getUsers()
    }, [userChats])

    useEffect(() => {
        const getUserChats = async() => {
            if(user?._id){
                setIsUserChatsLoading(true)
                setUserChatsError(null)
                const res = await getRequest(`${baseURL}/chat/${user?._id}`)
                
                setIsUserChatsLoading(false)
                if(res.error) {
                    return setUserChatsError(res)
                }
                setUserChats(res)
            }
        }
        getUserChats()
    }, [user])

    return <ChatContext.Provider value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats
    }}>{children}</ChatContext.Provider>
}