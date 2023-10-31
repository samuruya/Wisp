import{Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import U from "./pages/U";
import Chat from "./pages/Chat"
import Nav from "./components/nav-bar"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { ChatContextProvider } from "./context/chatContext";


function App() {
  const {user} = useContext(AuthContext)
  return (
    <ChatContextProvider user={user}>
    <Nav/>
    <Container> 
    <Routes>
      <Route path="/" element = {user ? <Chat/> : <Login/>} />
      <Route path="/Login" element = {user ? <Chat/> : <Login/>} />
      <Route path="/Register" element = {user ? <Chat/> : <Register/>} />
      <Route path="/u" element = {user ? <U/> : <Register/>}/>
      <Route path="*" element = {<Navigate to= "/"/>} />
    </Routes>
    </Container>
    </ChatContextProvider>

  )
}

export default App
