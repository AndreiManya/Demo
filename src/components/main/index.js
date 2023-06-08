import React from "react";
import styled from 'styled-components';
//images
import cloudLeft from './img/cloudLeft.svg'
import cloudRight from './img/cloudRight.svg'
//components
import Logo from './logo/logo.js'
import Header from './header/header.js'
import Timer from './timer/timer.js'

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

const Main = () => { 


  return (
    <Container>
      <Cloud src={cloudLeft}/>
      <Cloud src={cloudRight}/>
      <Logo/>
      <Header/>
      <Timer/>
    </Container>
  );
}


export default Main;