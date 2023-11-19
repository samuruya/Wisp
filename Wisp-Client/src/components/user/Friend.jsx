import { Stack } from "react-bootstrap";
import {useFetchRecipientUser} from "../../hooks/useFetchRecipientUser"

const Friend = ({chat, user}) => {
    const {recipientUser} = useFetchRecipientUser(chat, user)
    return (
        <Stack 
        direction="horizontal" 
        gap={3} 
        className="user-card align-items-center p-2 justify-content-between"
        role="button"
        >
            <div className="friend">
                    <img src={recipientUser?.pfp} height="50px"/>
                    <div className="name">{recipientUser?.tag}</div>
            </div>
        </Stack>
    )
}
 
export default Friend;