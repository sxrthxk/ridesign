import React from "react";
import styled from "styled-components";
import { StyledContainer, StyledHR } from "../UI";

const ContactUs = () => {
  const submitHandler = e => {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledLinks>
              <li>Contact Number</li>
              <li>Email</li>
              <li>Address</li>
          </StyledLinks>
          <StyledForm onSubmit={submitHandler}>
            <h1>Reach Out to Us!</h1>
            <input type="text" name="username" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <textarea
              name="text"
              cols="30"
              rows="10"
              placeholder="Type your Message..."
            ></textarea>
            <button type="submit">Click</button>
          </StyledForm>
        </StyledWrapper>
      </StyledContainer>
      <StyledHR />
    </>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledLinks = styled.ul`
  margin: 20px;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  li{
    
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 20px;
  background-color: white;
  h1 {
    margin: 20px;
  }
  input,
  textarea {
    width: auto;
    padding: 10px;
    margin: 20px;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
  }
  button{
    width: auto;
    padding: 10px;
    margin: 20px;
  }
`;

export default ContactUs;
