import React, { useEffect } from "react";
import styled from "styled-components";
import image1 from "../../assets/images/worksamples/1 (2)c_compressed.jpg";
import image2 from "../../assets/images/worksamples/2 (2)c_compressed.jpg";
import image3 from '../../assets/images/worksamples/4 (2)c_compressed.jpg'
import image4 from '../../assets/images/worksamples/Copy of Untitled (4)c_compressed.jpg'
import image5 from '../../assets/images/worksamples/photo_2021-05-25_18-12-46_compressed.jpg'
import image6 from '../../assets/images/worksamples/photo_2021-05-25_18-14-47_compressed.jpg'
import image7 from '../../assets/images/worksamples/photo_2021-05-25_18-14-53_compressed.jpg'
import image8 from '../../assets/images/worksamples/photo_2021-08-06_12-31-17_compressed.jpg'
import { StyledContainer } from "../UI";
import Aos from "aos";

const WorkSamples = () => {
  useEffect(() => {Aos.init()},[])

  require("../../assets/images/worksamples/1 (2)c_compressed.jpg")

  return (
    <StyledContainer>
      <StyledSampleContainer>
        <StyledWorkImage src={image1} />
        <StyledWorkImage src={image2} />
        <StyledWorkImage src={image3} />
        <StyledWorkImage src={image4} />
        <StyledWorkImage src={image5} />
        <StyledWorkImage src={image6} />
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
