import Aos from "aos";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import Services from '../../assets/models/ServicesModel'
import { StyledContainer, StyledHR } from "../UI";


const ContactUs = () => {

  useEffect(() => {
    Aos.init()
    window.scrollTo(0,0)
    
  }, [])

  const [submitEnabled, setSubmitEnabled] = useState(false);
  
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    budget: "",
    companyName: "",
    startingTime: "",
    description: "",
  });

  function inputChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('https://sheet.best/api/sheets/1140f02b-06f6-4d2b-ab10-f7b163a167fb',formData).then(res => console.log(res)).then(() => alert('Successfully Submitted.')).catch(error => console.error(error))

  };
  

  function recaptchaHandler() {
    console.log("Recap done");
    setSubmitEnabled(true);
  }
  return (
    <>
      <StyledContainer>
        <StyledForm data-aos="fade-down" onSubmit={submitHandler}>
          <h1>Reach Out to Us!</h1>
          <div>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={inputChangeHandler}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={inputChangeHandler}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="pnumber"
              value={formData.pnumber}
              onChange={inputChangeHandler}
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={inputChangeHandler}
              placeholder="Company Name"
            />
            <select
              hidden
              name="budget"
              value={formData.budget}
              onChange={inputChangeHandler}
            >
              <option value="" disabled>
                Budget
              </option>
              <option value="op2">Option 2</option>
              <option value="op3">Option 3</option>
            </select>
            <select
            hidden
              name="startingTime"
              value={formData.startingTime}
              onChange={inputChangeHandler}
            >
              <option value="" disabled>
                Starting Time
              </option>
              <option value="op2">Option 2</option>
              <option value="op3">Option 3</option>
            </select>
            <h1>Services Needed</h1>
            <br />
            <div className="checkboxes">
              {Services.map((service) => (
                <label key={service.key}>
                  <input type="checkbox" name={service.id} value={formData.checks} onChange={inputChangeHandler}/>
                  {service.title}
                </label>
              ))}
            </div>

            <textarea
            rows="8"
              placeholder="Details (Optional)"
              name="description"
              value={formData.description}
              onChange={inputChangeHandler}
            ></textarea>
          </div>
          <StyledReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={recaptchaHandler}/>
            <button type="submit" disabled={!submitEnabled}>Submit Response</button>
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
border-radius: 2rem;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  background-color: white;
  opacity: 80%;
  h1{
    margin: 20px;
  }
  h1:first-child {    
    font-size: 3rem;
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
