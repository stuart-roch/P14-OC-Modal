import Modal from "../lib/Modal";
import styled from "styled-components"

export default function TestModal(){
    return (
        <StyledModal openModal={true}>
            <h2>Hello</h2>
        </StyledModal>
    )
}

const StyledModal = styled(Modal)`

    color : red;
`