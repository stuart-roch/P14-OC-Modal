import { useState } from "react";
import Modal from "../lib/Modal";
import styled from "styled-components"

export default function TestModal(){

    const [openModal, setOpenModal] = useState(false)

    const onClose = () => setOpenModal(false)

    return (
        <>
            <button className="trigger-modal" onClick={() => setOpenModal(true)}>Open Modal</button>

            <StyledModal 
                modalState={[openModal, setOpenModal]} 
                className = "modal-wrapper" 
                closeButtonChild= {  <StyledDiv>Close</StyledDiv>
                 }
                >
                <h2>Hello</h2>
            </StyledModal>
        </>
    )
}

const StyledModal = styled(Modal)`

    color : red;
    border: 2px solid black;

`

const StyledDiv = styled.div`

    color: black;
`