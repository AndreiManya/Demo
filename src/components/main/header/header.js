import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 838px;
  margin-top: 93px;
`;
const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 104%;
  text-align: center;
  text-transform: uppercase;
  color: #162C4E;
  opacity: 0.39;
  margin: 0;
`;
const SubTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin: 8px auto;
  max-width: 423px;
`;

 const Header = () => { 

  return (
    <HeaderContainer>
      <Title>Under Construction</Title>
      <SubTitle>We're making lots of improvements and will be back soon</SubTitle>
    </HeaderContainer>
  );
}


export default Header;