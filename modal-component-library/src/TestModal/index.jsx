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
                >
                    <p>Hello World!</p>
            </Modal>
        </Container>
    )
}

const Container = styled.div`


`

const StyledDiv = styled.div`

    
`