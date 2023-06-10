import React, {useState} from "react"
import styled from 'styled-components'
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
  position: relative;
  @media (max-width: 992px) { 
    margin-top: 169px;
  }
`;

const InputContainer = styled.form`
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


const Error = styled.p`
  position: absolute;
  bottom: 15px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: red;
  @media (max-width: 992px) { 
    font-size: 18px;
  }
`;

 const Contact = ({openModal}) => { 
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = async (e) => { 
    e.preventDefault()
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!email || regex.test(email) === false ){
      setError(true)
      return
    } else {
      setError(false)
    }
    try {
      await fetch('/entries', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email), 
      }).then((e) => e.json());
      openModal('success')
    } catch (error) {
      openModal('error')
    }
  }
  return (
    <ContactContainer>
      <InputContainer
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Enter your Email and get notified"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
        </Input>
        <SubmitBtn type="submit"/>
      </InputContainer>
      {error && <Error>Invalid email</Error>}
    </ContactContainer>
  );
}


export default Contact;