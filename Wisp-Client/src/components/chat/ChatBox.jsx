import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/chatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipientUser";
import { Stack } from "react-bootstrap";
import moment from "moment"
import InputEmoji from "react-input-emoji"



const ChatBox = () => {
    const {user} = useContext(AuthContext)
    const {currentChat, messages, isMessagesLoading, sendText} = useContext(ChatContext);
    const { recipientUser } = useFetchRecipientUser(currentChat, user);
    const [textMessage, setTextMessage] = useState("")
    const bottomScrollRef = useRef(null)

    useEffect(() => {
        if(bottomScrollRef.current) {
            bottomScrollRef.current.scrollIntoView();
        }
    }, [messages])

    if(!recipientUser) return (<p style={{textAlign: "center", width: "100%"}}>No convo Open yet</p>)
    if(isMessagesLoading) return (<p style={{textAlign: "center", width: "100%"}}>Messages Loading...</p>)  

    const sendHandler = () => sendText(textMessage, user, currentChat._id, setTextMessage);



    return  <Stack className="chat-box" style={{height: "100%"}}>
                <div className="chat-header">
                    <img src={recipientUser.pfp} alt="" style={{width: '75px', height: '75px'}} />
                    <h1 style={{textAlign: "center", width: "100%"}}>{recipientUser.tag}</h1>
                </div>
                <Stack gap={3} className="messages" id="messages">
                    {messages && messages.map((message, index) => <Stack key={index} className={`${
                        message?.senderId === user?._id 
                         ? "message self align-self-end"
                         : "message align-self-start"
                    }`}>
                        <span className="msg-time">{moment(message.createdAt).calendar()}</span>
                        <span className="msg-text">{message.text}</span>
                    </Stack>)}
                    <div ref={bottomScrollRef}></div>
                </Stack>
                <Stack direction="horizontal" gap={3} className="chat-input" flex-grow-0>
                    <form action="">
                        <InputEmoji value={textMessage} onChange={setTextMessage} onEnter={sendHandler}/>
                        <button className="send-btn" id="send" type="submit">
                            <img src="https://i.ibb.co/Xz1HFr6/send.png" alt="" style={{width: '20px', height: '20px'}}/>
                        </button>
                    </form>
                </Stack>
                
            </Stack>


}



 
export default ChatBox;

