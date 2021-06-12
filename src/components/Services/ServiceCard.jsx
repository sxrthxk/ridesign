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
  
  const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 20px auto;
    /* padding: 20px; */
    position: relative;
    display: flex;
    flex-direction: column;
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
    width: 100%;
    /* background: linear-gradient(to right, #121122, #121121, #144122); */
    font-size: 3rem;
  `;

const StyledCard = styled.div`
z-index: 2;
overflow: hidden;

  &:last-child ${StyledWrapper} ${StyledTitle}{
    @media only screen and (max-width: 600px){
      font-size: 2rem;
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
   
  }
  /* box-shadow: -2px -2px 2px #27272792; */
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
  margin: 40px 40px;
  width: 40%;
  height: 100%;
  @media only screen and (max-width: 786px) {
    width: 90%;
    margin: 30px auto;
  }
`;

const StyledDescription = styled.div`
width: 90%;
  font-family: 'montserrat', sans-serif;
  line-height: 2rem;
  margin: 20px 0px;
  font-weight: lighter;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default ServiceCard;
