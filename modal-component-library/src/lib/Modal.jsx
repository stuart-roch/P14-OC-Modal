import styled from "styled-components"
import React from "react"

export default function Modal(
    {className, 
    children,
    modalState,
    hasCloseButton = true,
    closeButtonClassName,
    closeButtonChild,
    onClose}
    ){

   
    const [openModal, setOpenModal] = modalState

    if(typeof onClose !== "function"){
        onClose = () => setOpenModal(false)
    }

    return ( 
        <Container className={className} openModal={openModal}>
            {hasCloseButton && <button className={closeButtonClassName} onClick={onClose}>{closeButtonChild}</button> }
            {children}
        </Container>
    )
}

const Container = styled.div`

    display: ${({openModal}) => openModal ? "block" : "none"}

`