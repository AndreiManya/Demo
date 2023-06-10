import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 838px;
  margin-top: 93px;
  @media (max-width: 992px) { 
    margin-top: 166px;
  }
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
  @media (max-width: 992px) { 
    font-size: 36px;
  }
  @media (max-width: 568px) { 
    max-width: 320px;
    margin: auto;
  }
`;
export const SubTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin: 8px auto 0 auto;
  max-width: 423px;
  @media (max-width: 992px) { 
    font-size: 16px;
    max-width: 286px;
    margin: 20px auto 0 auto;
  }
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