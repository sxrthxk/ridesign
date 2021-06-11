import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import Services from '../../assets/services'
import { StyledContainer, StyledHR } from "../UI";

const ContactUs = () => {

  const [submitEnabled, setSubmitEnabled] = useState(true);
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  

  function recaptchaHandler() {
    console.log("Recap done");
    setSubmitEnabled(true);
  }
  return (
    <>
      <StyledContainer>
        <StyledForm onSubmit={submitHandler}>
          <h1>Reach Out to Us!</h1>
          <div>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="tel" name="pnumber" placeholder="Phone Number" />
            <input type="text" name="company-name" placeholder="Company Name" />
            <select defaultValue="">
              <option value="" disabled>
                Budget
              </option>
              <option value="op2">Option 2</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>
                Starting Time
              </option>
              <option value="op2">Option 2</option>
            </select>
            <h1>Services Needed</h1>
            <br />
            <div className="checkboxes">
              {Services.map(service => 
              <label key={service.key}>
                <input type="checkbox" name={service.id} />
               {service.title}
              </label>)
              
             }
            </div>
            
              <textarea placeholder="Details (Optional)"></textarea>
          </div>
          <StyledReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={recaptchaHandler}/>
            <button type="submit" disabled={!submitEnabled}>Submit Form</button>
        </StyledForm>
        {/* </StyledWrapper> */}
      </StyledContainer>
      <StyledHR />
    </>
  );
};

const StyledReCAPTCHA = styled(ReCAPTCHA)`
  margin: 20px;
  width: min-content;
`;

const StyledForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: #b6b6b6;
  h1 {
    margin: 20px;
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
    grid-column-start: 1;
    grid-column-end: 3;
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

  }
  }
  @media only screen and (max-width: 600px) {
    margin: 0%;
    div{
      }
  }
`;

export default ContactUs;
