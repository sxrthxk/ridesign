import React, { useEffect } from "react";
import styled from "styled-components";
import image1 from "../../assets/images/worksamples/image1-min.jpg";
import image2 from "../../assets/images/worksamples/photo_2021-05-25_18-14-47-min.jpg";
import image7 from '../../assets/images/worksamples/585318734095-min.jpg'
import image8 from '../../assets/images/worksamples/3503641738-min.jpg'
import { StyledContainer } from "../UI";
import Aos from "aos";

const WorkSamples = () => {
  useEffect(() => {Aos.init()},[])
  return (
    <StyledContainer>
      <StyledSampleContainer>
        <StyledWorkImage src={image1} />
        <StyledWorkImage src={image2} />
        <StyledWorkImage src={image7} />
        <StyledWorkImage src={image8} />
      </StyledSampleContainer>
    </StyledContainer>
  );
};



const StyledSampleContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledWorkImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  transition: ease-in-out 100ms;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default WorkSamples;
