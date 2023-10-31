import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const PotentialChats = () => {
    const {potentialChats} = useContext(ChatContext)
    return <>
    <div className="all-users">
        {potentialChats && potentialChats.map((u, index) => {
            return <div className="single-user" key={index} role="button">{u.tag}</div>
        })}
    </div>
    </>
}
 
export default PotentialChats;