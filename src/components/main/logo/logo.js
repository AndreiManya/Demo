import React from "react";
import styled from 'styled-components';
import logo from '../img/logo.svg'

const LogoContainer = styled.span`
    display: block;
    width: 190px;
    height: 60px;
    margin-top: 60px;
    background: url(${logo}) 100% no-repeat;
`;

 const Logo = () => { 

  return (
    <LogoContainer/>
  );
}


export default Logo;