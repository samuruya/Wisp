import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navi = () => {
    const {user, logoutUser} = useContext(AuthContext)
    return (
         <Navbar className="mb-4 navi">
            <Container>
                <h2><Link to="/">
                    <img className="logo" src="https://i.ibb.co/K7BMd9s/Wisp-logo-a-p.png" alt="" />
                </Link></h2>
                {
                    user && (<><span className="text-warning">Logged in As: {user?.tag} </span></>)
                }
                <Nav>
                    {
                        user && (<>
                            <Link onClick={() => logoutUser()} className="log-btn log-out" to="/Login">Logout</Link>
                        </>)
                    }

                    {!user && (<>
                            <Link className="log-btn" to="/Login">Login</Link>
                    </>)}
                </Nav>
            </Container>
         </Navbar> 
    );
}
 
export default Navi;