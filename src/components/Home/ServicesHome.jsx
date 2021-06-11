import React from "react";
import { StyledContainer } from "../UI";

import ServicesObject from "../../assets/models/Services";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const ServicesHome = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {ServicesObject.map((service) => {
          return (
            <StyledTitle key={service.key}>
              <HashLink to={`/services#${service.id}`}>
                {service.title}
              </HashLink>
            </StyledTitle>
          );
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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  margin: 20px;
  padding: 20px;
  width: max-content;
  background: linear-gradient(to right, #121122, #121121, #144122);
  border-radius: 10px;
  a {
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    a {
      font-size: 1rem;
      font-weight: 200;
    }
  }
`;

export default ServicesHome;
