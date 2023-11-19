import { Link } from "react-router-dom";
import { Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {

    const {loginUser, loginError, loginInfo, updateLoginInfo, isLoginLoading} = useContext(AuthContext)
    return ( 
    <>
        <Form onSubmit={loginUser}>
            <Row className="form-reg-row">
                <Col xs={6} className="log-a">
                <Stack gap={3}>
                    <h2>Login</h2>

                    <div>
                    <h3>Email</h3>
                    <Form.Control type="text" placeholder="" 
                    onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value}) } />
                    </div>
                    <div>
                    <h3>Password</h3>
                    <Form.Control type="password" placeholder="" 
                    onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value}) }  />
                    </div>
                    <Button className="logger-btn" variant="primary" type="submit">
                        {isLoginLoading ? "Getting you in..." : "Login"}
                    </Button>
                    {
                        loginError?.error && 
                        <Alert variant="danger"><p>{loginError.message}</p></Alert>
                    }
                    <Link to="/Register">Im New</Link>
                </Stack>
                </Col>
                <Col className="log-b">
                    <img src="https://i.ibb.co/K2KztLQ/svgviewer-png-output.png" alt="" />
                    <h2>Welcome Back</h2>
                </Col>
            </Row>
        </Form>


    </> 
    );
}
 
export default Login;