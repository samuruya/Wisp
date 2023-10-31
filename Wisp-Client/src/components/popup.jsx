import {useState} from "react";
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./style/Modal.css"
import PotentialChats from "./chat/PotentialChats";

const popup = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }
    
    return <Container>
        <button className="btn-modal" onClick={toggle}>
            +
        </button>
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                hello!
            </div>
        </div>
        </Container>
}
 
export default popup;