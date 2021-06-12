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
            <ServiceTile key={service.key} bgImage={service.bgImage}>
            <StyledSeeMore >
              <StyledHashLink to={`/services#${service.id}`}>
                See More
              </StyledHashLink>
            </StyledSeeMore>
            </ServiceTile>
          );
        })}
      </StyledWrapper>
    </StyledContainer>
  );
};

const ServiceTile = styled.div`
  background: url(${p => p.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 30rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  transition: all 0.5s ease-out;
  &:hover{
    transform: scale(1.05);
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const StyledHashLink = styled(HashLink)`
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    text-decoration: underline;
  }
  

`;

const StyledSeeMore = styled.h1`
  font-size: 1.5rem;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(transparent,gray,black);

  

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
