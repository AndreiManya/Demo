import React from "react";
import styled from 'styled-components';
//images
import cloudLeft from './img/cloudLeft.svg'
import cloudRight from './img/cloudRight.svg'
//components
import Logo from './logo/logo.js'
import Header from './header/header.js'
import Timer from './timer/timer.js'
import NavigateBtn from './navigateBtn/navigate.js'
import Contact from "./contact/contact";

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


  return (
    <Container>
      <Cloud src={cloudLeft}/>
      <Cloud src={cloudRight}/>
      <Logo/>
      <Header/>
      <Timer/>
      <NavigateBtn/>
      <Contact/>
    </Container>
  );
}


export default Main;