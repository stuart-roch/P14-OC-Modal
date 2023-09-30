/** 
 * @author ROCH Stuart
 * @version 0.1.13
 */

import styled from "styled-components"
import React from "react"

/**
 * Create a Modal React Component
 *  
 * @param {string} className - Class of the modal container
 * @param {[boolean, function()]} modalState - React State from the parent component that render the modal
 * @param {string} [modalContentDivClassName] - Class of the modal content container
 * @param {boolean} [hasCloseButton=true] - Indicate if the modal has a close button with a default value at true
 * @param {string} [closeButtonClassName] - Class of the close button
 * @param {HTMLElement|ReactComponent} [closeButtonChild] - Content between opening and closing tag of the close Button
 * @param {function} [onClose] - Function executed on the click of the close button
 * @returns {ReactComponent} - A Modal React Component
 */
export default function Modal(
    {className,
    modalContentDivClassName, 
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
        <Container className={className} $openModal={openModal}>
            <div className={modalContentDivClassName}>
                {children}
                {hasCloseButton && 
                <button className={closeButtonClassName} onClick={onClose}>
                    {closeButtonChild === undefined ? "Close" : closeButtonChild}
                </button>}
            </div>
        </Container>
    )
}

/**
 * Style the elements of the modal using styled-components lib
 * @type {ReactComponent}
 */
const Container = styled.div`

    display: ${(props) => props.$openModal ? "block !important;" : "none !important;"}
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    
    > div{
        border: 1px solid black;
        width: 50%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        box-shadow: 10px 10px 10px #D9D9D9;
        border-radius: 10px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;

        button:last-child{
            margin-top: 20px;
            border: 1px solid #D9D9D9;
            padding: 10px;
            background-color: #D9D9D9;
            align-self: end;
            border-radius: 5px;
            opacity: 0.8;
        }

        button:last-child:hover{
            opacity: 1;
        }


    }

    

    
`