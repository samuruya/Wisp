import { Link } from "react-router-dom";
import { Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import Friend from "../components/user/friend"


const U = () => {
    const { user, setPfp, logoutUser } = useContext(AuthContext)
    const { userChats, isUserChatsLoading, updateChat, userChatsError } = useContext(ChatContext);
    return (<>


        <div className="u-head">
            <div className="u-head-a">
                <div className="u-pfp">
                    <img src={user.pfp} alt="" className="pfp" />
                </div>
                <div className="u-info">
                    <h1>{user.tag}</h1>
                    {user.bio}
                </div>
            </div>
            <div className="u-head-b">
                <div>
                    <span className="level"><p>1</p></span>
                </div>
                <div>
                    <button className="edit-pro-btn">Edit Profile</button>
                </div>
            </div>
        </div>
        <div className="u-body">
            <div className="sc">

            </div>
            <div className="fl">
            {userChats?.length < 1 ? null : (
                <Stack direction="horizontal" gap={4} className="align-items-start page">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                        {isUserChatsLoading && <p>Loading chats...</p>}
                        {userChats?.map((chat, index) => {
                            return(
                                <div key={index}>
                                    <Friend chat={chat} user={user}/>
                                </div>
                            )
                        })}
                    </Stack>
                </Stack>
            )}
            </div>
        </div>


        <button onClick={logoutUser}>logout</button>


        </>);
}
 
export default U;