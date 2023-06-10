import React from "react"
import styled from 'styled-components'

const BlackContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  z-index: 9999;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    width: 320px;
    height: 370px;
    background: #FFFFFF;
    border-radius: 20px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalHeader = styled.h2`
    color: ${props => props.cl};
    margin-top: 97px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 104%;
    text-align: center;
    text-transform: uppercase;
    color: #162C4E;
`;
const ModalText = styled.p`
    margin-top: 29px;
    max-width: 280px;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.8);
`;
const Close = styled.button`
  width: 200px;
  padding: 16px 73px;
  background: #1D4169;
  border-radius: 40px;
  margin-top: 30px;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFF;
  border 2px solid transparent;
  &:hover { 
    border-color: #1D4169;
    color: #1D4169;
    background: transparent;
  }
`;

 const Modal = ({type, onClose}) => { 
  return (
    <BlackContainer>
      <ModalContainer>
        <ModalHeader
          cl={type === 'success' ? '#162C4E' : 'red'}
        >{type === 'success' ? 'SUCCESS!' : 'ERROR!'}</ModalHeader>
        <ModalText>{type === 'success' ? 'You have successfully subscribed to the email newsletter' : 'Unfortunatly email not delivered'}</ModalText>
        <Close
          onClick={() => onClose()}
        >Close</Close>
      </ModalContainer>
    </BlackContainer>
  )
}


export default Modal