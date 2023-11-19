import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";

const PotentialChats = () => {
    const {user} = useContext(AuthContext)
    const {potentialChats, createChat} = useContext(ChatContext)
    return <>
    <div className="all-users">
        {potentialChats && potentialChats.map((u, index) => {
            return <div className="single-user" 
            key={index} 
            onClick={() => createChat(user._id, u._id)} 
            role="button">{u.tag}
            </div>
        })}
    </div>
    </>
}
 
export default PotentialChats;