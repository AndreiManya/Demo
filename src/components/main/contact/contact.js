import React from "react";
import styled from 'styled-components';
import arrowRight from '../img/arrow-right.svg'
import arrowRightHover from '../img/arrow-right-hover.svg'

const ContactContainer = styled.section`
  width: 100%;
  height: 192px;
  margin-top: 76px;
  background: #162C4E;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 992px) { 
    margin-top: 169px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 440px;
  height: 26px;
  padding: 16px 8px 16px 27px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) { 
    max-width: 360px;
    height: 20px;
    padding: 10px 6px 10px 20px;
  }
  @media (max-width: 368px) { 
    max-width: 280px;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.6);
  &:focus { 
    outline: none;
  }
  @media (max-width: 992px) { 
    font-size: 14px;
  }
`;

const SubmitBtn = styled.button`
  width: 43px;
  height: 43px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: url(${arrowRight}) #DF2224 center no-repeat;
  cursor: pointer;
  &:hover { 
    border-color: #162C4E;
    background-image: url(${arrowRightHover});
    background-color: transparent;
  }
  @media (max-width: 992px) { 
    width: 33px;
    height: 33px;
  }
`;

 const Contact = () => { 

  return (
    <ContactContainer>
      <InputContainer>
        <Input
          placeholder="Enter your Email and get notified"
        >
        </Input>
        <SubmitBtn type="submit"/>
      </InputContainer>
    </ContactContainer>
  );
}


export default Contact;