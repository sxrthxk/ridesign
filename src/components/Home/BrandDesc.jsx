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
  width: 80%;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    font-weight: 200;
    font-size: 1.7rem;
  }
`;

export default BrandDesc;
