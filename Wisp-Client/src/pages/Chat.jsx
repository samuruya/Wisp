import { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import { Container, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";
import Popup from "../components/popup";
import ChatBox from "../components/chat/ChatBox";




const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateChat, userChatsError } = useContext(ChatContext);
            


        //BUG CHATS ARRAY IS EMPTY BUT IDK WHY // FIXED
    return (
        <Container className="page">
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start page">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return(
                                <div onClick={ () => updateChat(chat)} key={index}>
                                    <UserChat chat={chat} user={user}/>
                                </div>
                            )
                        })}
                        <Popup/>
                        <PotentialChats/>
                    </Stack>
                    <ChatBox/>
                </Stack>
            )}
        </Container>
    );
}
 
export default Chat;