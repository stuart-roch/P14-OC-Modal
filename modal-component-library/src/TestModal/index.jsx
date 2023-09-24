import { useState } from "react";
import Modal from "../lib/Modal";
import styled from "styled-components"

export default function TestModal(){

    const [openModal, setOpenModal] = useState(false)

    const onClose = () => setOpenModal(false)

    return (
        <Container>
            <button className="trigger-modal" onClick={() => setOpenModal(true)}>Open Modal</button>

            <Modal 
                modalState={[openModal, setOpenModal]} 
                className = "modal-wrapper" 
                closeButtonChild= {<StyledDiv>Close</StyledDiv>}
                closeButtonClassName="modal-close-button"
                >
                <h2>Hello</h2>
            </Modal>
        </Container>
    )
}

const Container = styled.div`

    .modal-wrapper{
        color : red;
        border: 2px solid black;
        display: flex;
    }
        

    .modal-close-button{
        border: none;
        background-color: white;
    }

`

const StyledDiv = styled.div`

    color: black;
`