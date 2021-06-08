import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title, content,id }) => {
  return (
    <StyledWrapper>
      <span id={id}></span>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{content}</StyledDescription>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 20px;
  box-shadow: -2px -2px 2px #27272792;
  position: relative;
  /* &:before{
    display: block;
    content: "";
    margin-top: -558px;
    height: 558px;
    visibility: hidden;
    pointer-events: none;
  } */
  span{
    position: absolute;
    top: -148px;
  }
  @media only screen and (max-width: 600px) {
    span {
      top: -108px;
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
  margin: 20px 10px;
  font-weight: lighter;
  word-wrap: break-word;
`;

export default ServiceCard;
