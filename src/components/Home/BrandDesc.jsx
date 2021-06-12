import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../UI";
import LogoVid from "../../assets/videos/logo-anim.mp4";

import Aos from "aos";

const BrandDesc = () => {
  Aos.init();
  return (
    <StyledContainer style={{ color: "white" }}>
      <StyledWrapper>
      <StyledVideo
              width="320"
              height="240"
              autoPlay={true}
              muted
              loop={true}
              controls={false}
            >
              <source src={LogoVid} type="video/mp4" />
              <h1>Your Browser does not support videos</h1>
            </StyledVideo>
      <StyledDescription>
        <strong>
      Ridesignmedia is a social media agency based in Dewas, Madhya Pradesh.</strong> <span>Our agency helps clients by providing different services with 100% customer satisfaction. We have worked with more than 300+ million base on Instagram as well as on social media platforms. Our agency have helped more than hundred of brands to sustain their digital buisness. By bringing them quality leads which later on converted as their permanent clients respectively. Although we have been working with international brands for their branding and acquiring online sales with our</span> <strong>super powerful strategies.</strong>
      </StyledDescription>
      
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledVideo = styled.video`
  width: 25rem;
  height: 25rem;
  @media only screen and (max-width: 600px) {
    width: 15rem;
    height: 15rem;
  }

`;


const StyledWrapper  = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledDescription = styled.h1`
span{
  opacity: 50%;
}
  width: 85%;
  margin: 20px;
  padding: 20px;
  /* background: linear-gradient(#1c1c1c, #0a0a0a, #2b2b2b, black, gray); */
  background-attachment: fixed;
  text-align: right;
  /* border-radius: 10px; */
  /* border: 2px solid rgba(200,200,200,0.5); */
  /* box-shadow: 2px 2px 2px rgba(200,200,200,0.2); */
  font-family: 'montserrat', sans-serif;
  line-height: 2.5rem;
  
  font-weight: 100;
  @media only screen and (max-width: 600px) {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export default BrandDesc;
