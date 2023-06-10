import React from "react";
import styled from 'styled-components';
import logo from '../img/logo.svg'

const LogoContainer = styled.span`
    display: block;
    width: 190px;
    height: 60px;
    margin-top: 60px;
    background: url(${logo}) center no-repeat;
    background-size: 100% auto;
    cursor: pointer;
    @media (max-width: 992px) { 
      margin-top: 100px;
    }
    @media (max-width: 368px) { 
      margin-top: 80px;
      width: 128px;
      height: 40px;
    }
`;

 const Logo = () => { 

  return (
    <LogoContainer
      onClick={(e) => {
        e.preventDefault();
        window.location.href='';
      }}
    />
  );
}


export default Logo;