import React, {useState} from "react"
import styled from 'styled-components'
//images
import cloudLeft from './img/cloudLeft.svg'
import cloudRight from './img/cloudRight.svg'
//components
import Logo from './logo/logo.js'
import Header from './header/header.js'
import Timer from './timer/timer.js'
import NavigateBtn from './navigateBtn/navigate.js'
import Contact from "./contact/contact"
import Modal from './modal/modal.js'

const Container = styled.div`
    max-width: 1920px;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &::-webkit-scrollbar{
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
`;
const Cloud = styled.img`
    position: absolute;
    top: 0;
    &:first-of-type { 
        left: 0;
    }
    &:last-of-type { 
        right: 0;
    }
    @media (max-width: 1400px) { 
      width: 290px;
    }
    @media (max-width: 768px) { 
      width: 260px;
      &:first-of-type { 
        top: -20px;
      }
    }
    @media (max-width: 665px) { 
      width: 200px;
    }
    @media (max-width: 468px) { 
      width: 180px;
    }
    @media (max-width: 368px) { 
      width: 170px;
      &:last-of-type { 
        right: -20px;
        top: -10px;
      }
    }
`;

const Main = () => { 
  const [modal, setModal] = useState({ open: false, type: 'success'})
  const openModal = (type) => { 
    console.log(12)
    setModal({open: true, type})
    document.body.style.overflow = 'hidden';
    console.log(modal)
  }
  const onClose = () => { 
    setModal({ open: false, type: ''})
    document.body.style.overflow = 'unset';
    console.log(modal)
  }
  return (
    <Container>
      <Cloud src={cloudLeft}/>
      <Cloud src={cloudRight}/>
      <Logo/>
      <Header/>
      <Timer/>
      <NavigateBtn/>
      <Contact openModal={(e) => openModal(e)}/>
      {
        modal.open &&
        <Modal type={modal.type} onClose={onClose}/>
      }
    </Container>
  );
}


export default Main;