import React from "react";
import styled from "styled-components";
import AOS from 'aos'
import 'aos/dist/aos.css'


const ServiceCard = ({ title, content, id, serviceImage }) => {
  AOS.init()
  return (
    <StyledCard>
      <StyledImage data-aos="fade-down" src={serviceImage}></StyledImage>
      <StyledWrapper>
        <span id={id}></span>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{content}</StyledDescription>
      </StyledWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  box-shadow: -2px -2px 2px #27272792;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 786px) {
    flex-direction: column;
    &:nth-child(odd) {
      flex-direction: column;
    }
  }
`;

const StyledImage = styled.img`
  margin: 50px auto;
  width: 50%;
  height: 100%;
  @media only screen and (max-width: 786px) {
    width: 90%;
    margin: 30px auto;
  }
`;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  /* &:before{
    display: block;
    content: "";
    margin-top: -558px;
    height: 558px;
    visibility: hidden;
    pointer-events: none;
  } */
  span {
    position: absolute;
    top: -164px;
  }
  @media only screen and (max-width: 600px) {
    span {
      top: -128px;
    }
  }
`;

const StyledTitle = styled.h1`
  margin: auto;
  padding: 20px;
  width: fit-content;
  background: linear-gradient(to right, #121122, #121121, #144122);
  border-radius: 10px;
`;

const StyledDescription = styled.div`
  margin: 20px 0px;
  font-weight: lighter;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default ServiceCard;
