import { createContext, useState, useEffect, useCallback } from "react";
import {  baseURL, getRequest, postRequest } from "../utils/services";
import { Prev } from "react-bootstrap/esm/PageItem";

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [isMessagesLoading, setIsMessagesLoading] = useState(false);
    const [messagesError, setMessagesError] = useState(null);
    const [sendTextMessageError, setSendTextMessageError] = useState(null)
    const [newMessage, setNewMessage] = useState(null)


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

    useEffect(() => {
        const getMessages = async() => {
            setIsMessagesLoading(true)
            setMessagesError(null)
            const res = await getRequest(`${baseURL}/message/${currentChat?._id}`)
            
            setIsMessagesLoading(false)
            if(res.error) {
                return setMessagesError(res)
            }
            setMessages(res)
        }
        getMessages()
    }, [currentChat])

    const sendText = useCallback(
        async(textMessage, sender, currentChatId, setTextMessage) => {
        if(!textMessage) return

            const res = await postRequest(
                `${baseURL}/message`,
                JSON.stringify({
                senderId: sender._id,
                chatId: currentChatId,
                text: textMessage
                })
            );
            
            if(res.error) {
                return setSendTextMessageError(res)
            }
            setNewMessage(res);
            setMessages((prev)=> [...prev, res])
            setTextMessage('')
        },[]
    ); 

    const updateChat = useCallback((chat) => {
        setCurrentChat(chat)
    }, [])


    const createChat = useCallback(async(firstId, secondId) => {
        const res = await postRequest(`${baseURL}/chat/`,
            JSON.stringify({
                firstId,
                secondId
            })
        );
        if(res.error) {
            return console.log("Error creating chat", res);
        }
        setUserChats((prev) => [...prev, res])
    },[])


    return <ChatContext.Provider value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        currentChat,
        createChat,
        updateChat,
        messages,
        isMessagesLoading,
        messagesError,
        sendText,
    }}>{children}</ChatContext.Provider>
}