import React from "react";
import styled from 'styled-components';
import arrowRight from '../img/arrow-right.svg'
import arrowRightHover from '../img/arrow-right-hover.svg'

const NavigateContainer = styled.div`
  width: 338px;
  margin-top: 72px;
  text-align: center;
  @media (max-width: 992px) { 
    margin-top: 40px;
  }
`;

export const Label = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  max-width: 423px;
  margin: 0 auto;
  @media (max-width: 992px) { 
    font-size: 16px;
  }
`;

const BtnText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
`;
const ArrowIcon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background: url(${arrowRight}) center no-repeat;
`;
const Btn = styled.button`
  width: 240px;
  height: 60px;
  background: #1D4169;
  border-radius: 40px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: #FFFFFF;
  margin-top: 12px;
  &:hover { 
      color: #1D4169;
      background: #FFFFFF;
  }
  &:hover ${ArrowIcon} { 
    background: url(${arrowRightHover}) center no-repeat;
  }
`;

 const NavigateBtn = () => { 

  return (
    <NavigateContainer>
      <Label>Check our event page when you wait:</Label>
      <Btn 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='http://google.com';
        }}
      >
        <BtnText>Go to the event</BtnText>
        <ArrowIcon></ArrowIcon>
      </Btn>
    </NavigateContainer>
  );
}


export default NavigateBtn;