import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navi = () => {
    return (
         <Navbar className="mb-4 navi">
            <Container>
                <h2><Link to="/">
                    <img className="logo" src="https://i.ibb.co/K7BMd9s/Wisp-logo-a-p.png" alt="" />
                </Link></h2>
                <span className="text-warning"> </span>
                <Nav>
                    <Link className="log-btn" to="/Login">Login</Link>
                </Nav>
            </Container>
         </Navbar> 
    );
}
 
export default Navi;