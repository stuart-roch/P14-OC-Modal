import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Modal({children, openModal = false, hasCloseButton = true}){

    const [isHidden, setIsHidden] = useState(!openModal)

    useEffect(() => {
        if(typeof openModal === "boolean"){
            setIsHidden(!openModal)
        }
    },[openModal])
    

    return ( 
        <Container className="modal-container" isHidden={isHidden}>
            {children}
        </Container>
    )
}

const Container = styled.div`

    display: ${({isHidden}) => isHidden ? "none" : "block"}

`