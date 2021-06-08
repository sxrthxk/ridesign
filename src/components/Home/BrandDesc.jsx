import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../UI";

const BrandDesc = () => {
  return (
    <StyledContainer style={{ color: "white" }}>
      <StyledDescription>
      Our agency is an explainer video company headquartered in Dewas, India. Our team of young enthusiasts specializes in video production. Our clients are from every category of niche that you can find on social media. Our company bet provide include advertising & marketing, business services, and consumer products & services with the help of video creation
      </StyledDescription>
    </StyledContainer>
  );
};

const StyledDescription = styled.h1`
  width: 85%;
  margin: 20px;
  padding: 20px;
  /* background: linear-gradient(to right, #1c1c1c, #0a0a0a, #2b2b2b); */
  text-align: center;
  border-radius: 10px;
  border: 2px solid rgba(200,200,200,0.5);
  box-shadow: 2px 2px 2px rgba(200,200,200,0.2);
  @media only screen and (max-width: 600px) {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export default BrandDesc;
