import { Link } from "react-router-dom";
import { Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const U = () => {
    const {user, setPfp, logoutUser} = useContext(AuthContext)
    return (
         <>
         hello {user.tag}!
            <img src={user.pfp} alt="" />

            <Form onSubmit={setPfp}>
                <Form.Control type="file" id="fileEl"/>
                <Button type="Submit"></Button>
            </Form>

         </>
    );
}
 
export default U;