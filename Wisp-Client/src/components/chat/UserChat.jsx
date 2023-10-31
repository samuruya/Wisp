import { Stack } from "react-bootstrap";
import {useFetchRecipientUser} from "../../hooks/useFetchRecipientUser"

const UserChat = ({chat, user}) => {
    const {recipientUser} = useFetchRecipientUser(chat, user)
    return (
        <Stack 
        direction="horizontal" 
        gap={3} 
        className="user-card align-items-center p-2 justify-content-between"
        role="button"
        >
            <div className="d-flex">
                <div className="me-2">
                    <img src="https://i.ibb.co/tcwBx9s/default-User.png" height="50px"/>
                </div>
                <div className="text-content">
                    <div className="name">{recipientUser?.tag}</div>
                    <div className="text">Text Message</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">21/10/2003</div>
                <div className="this-user-notifications">2</div>
            </div>
        </Stack>
    )
}

export default UserChat;