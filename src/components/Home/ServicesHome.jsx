import React from "react";
import { StyledContainer } from "../UI";

import ServicesObject from "../../assets/services";
import styled from "styled-components";

const ServicesHome = () => {
  return (
    <StyledContainer>
        <StyledWrapper>
      {ServicesObject.map((service) => {
        return <StyledTitle>{service.title}</StyledTitle>;
      })}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
`;

const StyledTitle = styled.h1`
color: white;
  font-size: 1.5rem;
  margin: 20px;
  padding: 20px;
  width: max-content;
  background: linear-gradient(to right, #121122, #121121, #144122);
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
      font-size: 1rem;
      font-weight: 200;
  }
`;

export default ServicesHome;
