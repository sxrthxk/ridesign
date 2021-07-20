import Aos from "aos";
import { useEffect } from "react";
import styled from "styled-components";
import { useFormData } from "../ContactUsContext";
import { StyledContainer, StyledHR } from "../UI";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";


const ContactUs = () => {

  const { submitHandler, pageNumber, nextPage, prevPage }= useFormData();

  useEffect(() => {
    Aos.init()
    window.scrollTo(0,0)
    
  }, [])

    const Steps = [<StepOne/>, <StepTwo/>, <StepThree/>]
    const Titles = ['Services Needed', 'Contact Details', 'Additional Comments']
  
  return (
    <>
      <StyledContainer>
        <StyledForm data-aos="fade-down" onSubmit={submitHandler}>
          <h1>Reach Out to Us!</h1>
          <h2>{Titles[pageNumber]}</h2>
          <div>
            {Steps[pageNumber]}
          </div>
        </StyledForm>
        <div>
        {pageNumber > 0 && <StyledFormNavigator onClick={prevPage}>Prev</StyledFormNavigator>}
        {pageNumber < 2 && <StyledFormNavigator onClick={nextPage}>Next</StyledFormNavigator>}
        </div>
      </StyledContainer>
      <StyledHR />
    </>
  );
};


const StyledFormNavigator = styled.button`
  width: auto;
    padding: 20px;
    margin: 20px;
    border: none;
    color: black;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    /* width: 20rem; */
    /* height: 5rem; */
    font-size: 1.2rem;
    transition: all 0.5s ease-in;
`;

const StyledForm = styled.form`
padding-bottom: 2rem;
border-radius: 2rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: white;
  opacity: 80%;
  h2{
    text-decoration: underline;
  }
  h1{
    margin: 20px;
  }
  h1:first-child {    
    font-size: 3rem;
    @media only screen and (max-width: 600px){
      margin-top: 2rem;
      font-size: 2rem;
    }
  }
  label > input{
    width: 1rem;
    height: 1rem;
  }
  input:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .checkboxes{
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    grid-column-start: 1;
    grid-column-end: 3;
    @media only screen and (max-width: 600px){
      font-size: 1rem;
    }
  }
  
  textarea{
    grid-column-start: 1;
    grid-column-end: 3;
    width: 100%;
    
  }
  input,
  textarea,
  select {
    height: min-content;
    font-family: "roboto";
    width: auto;
    padding: 10px;
    margin: 20px;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
  }
  button {
    width: auto;
    padding: 20px;
    margin: 20px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 10px;
    cursor: pointer;
    /* width: 20rem; */
    /* height: 5rem; */
    font-size: 1.2rem;
    transition: all 0.5s ease-in;
    &:disabled{
      cursor: auto;
    background-color: gray;
    text-decoration: line-through;
    }
  }
    
  input:focus,
  textarea:focus {
    outline: none;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 0%;
    
    h1{
      font-size: 2rem;
    }

  }
  }
  
`;

export default ContactUs;
