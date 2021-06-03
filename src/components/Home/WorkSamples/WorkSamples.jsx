import React from "react";
import styled from "styled-components";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/photo_2021-05-25_18-14-47.jpg";
import image3 from "../../../assets/images/photo_2021-05-25_18-14-53.jpg";
import image4 from "../../../assets/images/photo_2021-05-25_18-14-54.jpg";
import image5 from "../../../assets/images/photo_2021-05-25_18-15-00.jpg";

const WorkSamples = () => {
  return (
    <StyledContainer>
      <StyledSampleContainer>
        <StyledWorkImage src={image1} />
        <StyledWorkImage src={image2} />
        <StyledWorkImage src={image3} />
        <StyledWorkImage src={image4} />
        <StyledWorkImage src={image5} />
        <StyledWorkImage src={image2} />
        <StyledWorkImage src={image3} />
        <StyledWorkImage src={image1} />
        <StyledWorkImage src={image5} />
        <StyledWorkImage src={image4} />
      </StyledSampleContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
