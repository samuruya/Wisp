import{Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Chat from "./pages/Chat"
import Nav from "./components/nav-bar"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";


function App() {
  return (
    <>
    <Nav/>
    <Container> 
    <Routes>
      <Route path="/" element = {<Chat/>} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/Register" element = {<Register/>} />
      <Route path="*" element = {<Navigate to= "/"/>} />
    </Routes>
    </Container>
    </>

  )
}

export default App
