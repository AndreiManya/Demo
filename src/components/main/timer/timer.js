import React from "react";
import styled from 'styled-components';
import leaft from '../img/leaf.svg'

const TimerContainer = styled.div`
  width: 588px;
  margin-top: 32px;
  display: grid;
  grid-template-rows: 72px 54px;
  grid-template-columns: 132px 19px 132px 19px 132px 19px 132px;
  row-gap: 3px;
  @media (max-width: 992px) { 
    margin-top: 40px;
    width: 358px;
    justify-content: center;
    grid-template-rows: 36px auto;
    grid-template-columns: 64px 10px 64px 10px 64px 10px 64px;
  }
`;

const Symbol = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 100%;
  color: #162C4E;
  margin: auto;
  @media (max-width: 992px) { 
    font-size: 36px;
  }
`;

const Leaf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url(${leaft}) center no-repeat;
  background-size: 100% auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #FFFFFF;
  &:nth-of-type(2) {
    grid-column: 3/4;
  }
  &:nth-of-type(3) {
    grid-column: 5/6;
  }
  &:nth-of-type(4) {
    grid-column: 7/8;
  }
  @media (max-width: 992px) { 
    margin: auto;
    font-size: 12px;
  }
`;

 const Timer = () => { 
  const isMobile = window.matchMedia("only screen and (max-width: 992px)").matches

  return (
    <TimerContainer>
      <Symbol>92</Symbol>
      <Symbol>:</Symbol>
      <Symbol>11</Symbol>
      <Symbol>:</Symbol>
      <Symbol>41</Symbol>
      <Symbol>:</Symbol>
      <Symbol>48</Symbol>
      <Leaf>{isMobile ? 'DD' : 'Days'}</Leaf>
      <Leaf>{isMobile ? 'HH' : 'Hours'}</Leaf>
      <Leaf>{isMobile ? 'MM' : 'Minutes'}</Leaf>
      <Leaf>{isMobile ? 'SS' : 'Seconds'}</Leaf>
    </TimerContainer>
  );
}


export default Timer;