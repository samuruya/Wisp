import { Link } from "react-router-dom";
import { Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";

const Login = () => {
    return ( 
    <>
        <Form>
            <Row className="form-reg-row">
                <Col xs={6}>
                <Stack gap={3}>
                    <h2>Login</h2>

                    <div>
                    <h3>Email</h3>
                    <Form.Control type="text" placeholder=""/>
                    </div>
                    <div>
                    <h3>Password</h3>
                    <Form.Control type="text" placeholder=""/>
                    </div>
                    <Button className="logger-btn" variant="primary" type="submit">
                        Register
                    </Button>

                    <Alert variant="danger"><p>An error ocurred</p></Alert>
                </Stack>
                </Col>
            </Row>
        </Form>

        <Link to="/Register">Im New</Link>
    </> 
    );
}
 
export default Login;