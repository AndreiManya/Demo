import React from "react";
import styled from 'styled-components';
import leaft from '../img/leaf.svg'

const TimerContainer = styled.div`
  width: 588px;
  margin-top: 32px;
  display: grid;
  grid-template-rows: 72px 132px;
  grid-template-columns: 132px 19px 132px 19px 132px 19px 132px;
`;

const Symbol = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 100%;
  color: #162C4E;
  margin: auto;
`;

const Leaf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 54px;
  background: url(${leaft}) 100% no-repeat;
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

`;

 const Timer = () => { 

  return (
    <TimerContainer>
      <Symbol>92</Symbol>
      <Symbol>:</Symbol>
      <Symbol>11</Symbol>
      <Symbol>:</Symbol>
      <Symbol>41</Symbol>
      <Symbol>:</Symbol>
      <Symbol>48</Symbol>
      <Leaf>Days</Leaf>
      <Leaf>Hours</Leaf>
      <Leaf>Minutes</Leaf>
      <Leaf>Seconds</Leaf>
    </TimerContainer>
  );
}


export default Timer;