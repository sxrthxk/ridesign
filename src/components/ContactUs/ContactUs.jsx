import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { StyledContainer, StyledHR } from "../UI";

const ContactUs = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  function recaptchaHandler () {
    console.log("Recap done")
  }
  return (
    <>
      <StyledContainer>
        {/* <StyledWrapper>
          <StyledLinks>
            <div>
            <li>
              <Phone />
              <div>
                <h2>Contact Number</h2>
                <p>+0123456789</p>
              </div>
            </li>
            <li>
              <Mail />
              <div>
                <h2>Email</h2>
                <p>+0123456789</p>
              </div>
            </li>
            <li>
              <Addr />
              <div>
                <h2>Address</h2>
                <p>+0123456789</p>
              </div>
            </li>
            </div>
          </StyledLinks> */}
          <StyledForm onSubmit={submitHandler}>
            <h1>Reach Out to Us!</h1>
            <div>
            <input type="text" name="username" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <textarea
              name="text"
              cols="30"
              rows="10"
              placeholder="Type your Message..."
            ></textarea>
            <button type="submit">Submit</button>
            </div>
            <ReCAPTCHA sitekey="6Le6LyAbAAAAAIq96mAWrgMZFe0W3SAlzPwF6Ybz" onChange={recaptchaHandler}/>
          </StyledForm>
        {/* </StyledWrapper> */}
      </StyledContainer>
      <StyledHR />
    </>
  );
};

// const StyledWrapper = styled.div`
//   /* height: 100%; */
//   width: 100%;
//   display: grid;
//   place-items: stretch;
//   grid-template-columns: 1fr 1fr;
//   @media only screen and (max-width: 600px) {
//     /* grid-template-rows: 1fr 1fr;
//     grid-template-columns: 1fr; */
//     display: block;
//   }
// `;

// const StyledLinks = styled.ul`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   li {
//     color: white;
//     margin: 40px;
//     height: max-content;
//     display: flex;
//     align-items: center;

//   }
//   li > svg{
//     fill: white;
//     height: 2rem;
//     width: 2rem;
//     margin: 10px;
//   }
//   li > div {
//     margin: 10px;
//   }
//   li> div > p {
//     color: rgb(100,100,100);
//   }
//   @media only screen and (max-width: 600px) {
//     li{
//       margin: 20px auto;
//     }
//   }
// `;

const StyledForm = styled.form`
width: 100%;
height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #b6b6b6;
  h1 {
    margin: 20px;
  }
  input,
  textarea {
    height: min-content;
    font-family: 'roboto';
    width: auto;
    padding: 10px;
    margin: 20px;
    border: none;
    border-bottom: 2px solid black;
    resize: none;
  }
  button {
    width: auto;
    padding: 10px;
    margin: 20px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 10px;
  }
  input:focus, textarea:focus{
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    margin: 0%;
  }
`;

export default ContactUs;
