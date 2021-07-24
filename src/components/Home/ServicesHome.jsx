import React from "react";
import { StyledContainer, StyledTitle } from "../UI";

import ServicesObject from "../../assets/models/ServicesModel";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";

const ServicesHome = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <StyledContainer>
      <StyledTitle>
        <span>Our</span> Services
      </StyledTitle>
      <StyledWrapper>
        {ServicesObject.map((service) => {
          return (
            <StyledBrand key={service.key} data-aos="fade-up">
              <StyledHashLink to={`/services#${service.id}`}>
                <StyledAvatar src={service.bgImage}>
                  {/* <StyledSeeMore >
              <StyledHashLink to={`/services#${service.id}`}>
                See More
              </StyledHashLink>
            </StyledSeeMore> */}
                </StyledAvatar>
              </StyledHashLink>
              {/* <StyledTitleHashLink to={`/services#${service.id}`}>{service.title}</StyledTitleHashLink> */}
            </StyledBrand>
          );
        })}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 20px;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    h1 {
      /* word-wrap: break-word; */
    }
  }
`;

const StyledAvatar = styled.img`
  width: 10rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 2px 2px 4px 4px rgba(255,255,255,0.3),
  -2px -2px 4px 4px rgba(255,255,255,0.3);
  @media only screen and (max-width: 600px) {
    width: 7.5rem;
    margin: 10px;
  }
`;

// const ServiceTile = styled.div`
//   background-image: url(${(p) => p.bgImage});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   height: 30rem;
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
//   transition: all 0.5s ease-out;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

const StyledWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;

  /* display: grid;
  place-items: center;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  
  @media only screen and (max-width: 600px) {
    width: 100%;
  } */
`;

// const StyledTitleHashLink = styled(HashLink)`
// text-align: center;
//   width: auto;
//   font-weight: lighter;
//   font-size: 2rem;
//   overflow-wrap: break-word;
// `;

const StyledHashLink = styled(HashLink)`
  border-radius: 50%;
  margin: 50px;
  @media only screen and (max-width: 600px) {
    width: 7.5rem;
    margin: 10px;
  }
`;

// const StyledSeeMore = styled.h1`
//   font-size: 1.5rem;
//   padding: 20px;
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;

//   a {
//     color: white;
//     text-decoration: none;
//   }
//   @media only screen and (max-width: 600px) {
//     a {
//       font-size: 1rem;
//       font-weight: 200;
//     }
//   }
// `;

export default ServicesHome;
