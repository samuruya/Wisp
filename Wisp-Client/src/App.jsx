import{Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Chat from "./pages/Chat"
import Nav from "./components/nav-bar"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Nav/>
    <Container> 
    <Routes>
      <Route path="/" element = {user ? <Chat/> : <Login/>} />
      <Route path="/Login" element = {user ? <Chat/> : <Login/>} />
      <Route path="/Register" element = {user ? <Chat/> : <Register/>} />
      <Route path="*" element = {<Navigate to= "/"/>} />
    </Routes>
    </Container>
    </>

  )
}

export default App
