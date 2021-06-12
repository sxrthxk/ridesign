import React from "react";
import LaptopVid from '../../assets/videos/laptop effect.mp4'
import { StyledContainer, StyledHR } from "../UI";
import ServiceCard from "./ServiceCard";


import ServicesObject from "../../assets/models/ServicesModel";
import { useEffect } from "react";
import styled from "styled-components";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    
  }, [])
  return (
    <>
      <StyledContainer style={{ color: "white" }}>
        <StyledWrapper>
          <StyledTitle><div>Our </div>Services</StyledTitle>
      <StyledVideo
              width="320"
              height="240"
              autoPlay={true}
              muted
              loop={true}
              controls={false}
            >
              <source src={LaptopVid} type="video/mp4" />
              <h1>Your Browser does not support videos</h1>
            </StyledVideo>
            </StyledWrapper>
        {ServicesObject.map((service) => (
          <ServiceCard
            key={service.key}
            title={service.title}
            content={service.content}
            id={service.id}
            serviceImage={service.image}
          />
        ))}
      </StyledContainer>
      <StyledHR />
    </>
  );
};


const StyledWrapper = styled.div`
position: relative;
width: 90%;
display: flex;
justify-content: space-between;
div{
  opacity: 50%;
}
overflow: hidden;
`;

const StyledVideo = styled.video`

position: absolute;
right: 30%;
top: 30px;
  width: 20rem;
  height: 20rem;
  transform: scale(4.5);
  @media only screen and (max-width: 998px){
    display: none;
  }

`;

const StyledTitle = styled.h1`
z-index: 2;
  font-size: 10rem;
  color: white;
  @media only screen and (max-width: 1000px) {
    font-size: 4.5rem;
  }
`;


export default Services;
