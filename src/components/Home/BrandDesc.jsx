import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../UI";

const BrandDesc = () => {
  return (
    <StyledContainer style={{ color: "white" }}>
      <StyledDescription>
      Ridesignmedia, a social media agency based in Dewas, Madhya Pradesh. Our agency helps clients by providing different services with 100% customer satisfaction. We have worked with more than 300+ million base on Instagram as well as on social media platforms. Our agency have helped more than hundred of brands to sustain their digital buisness. By bringing them quality leads which later on converted as their permanent clients respectively. Although we have been working with international brands for their branding and acquiring online sales with our super powerful strategies. The services we provide are logo creation, Instagram growth, Instagram account management, YouTube channel management and growth , branding and many more as we have professionals in our staff for several niches. The agency have been working for more than six years in the market that’s what the reason we are famous all over the globe.
      </StyledDescription>
    </StyledContainer>
  );
};

const StyledDescription = styled.h1`
  width: 85%;
  margin: 20px;
  padding: 20px;
  background: linear-gradient(#1c1c1c, #0a0a0a, #2b2b2b, black, gray);
  background-attachment: fixed;
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
