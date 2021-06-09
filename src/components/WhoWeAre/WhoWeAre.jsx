import React from "react";
import styled from "styled-components";
import { StyledContainer, StyledHR } from "../UI";
import TeamCard from './TeamCard'

const WhoWeAre = () => {
  return (
    <>
      <StyledContainer>
        <StyledBrandDescription>
          <StyledBrandText>

          </StyledBrandText>
          <StyledBrandLogo>
            
          </StyledBrandLogo>
        </StyledBrandDescription>

        <StyledTeamsWrapper>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
        </StyledTeamsWrapper>
      </StyledContainer>
      <StyledHR/>
    </>
  );
};

const StyledBrandDescription = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const StyledBrandText = styled.p`
  color: white;
  word-wrap: normal;
  font-size: 1rem;
`;

const StyledBrandLogo = styled.div``;
 
const StyledTeamsWrapper = styled.div`
margin: auto;
width: 100%;
display: grid;
justify-content: center;
/* place-items: center; */
grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  /* display: flex; */
  /* justify-content: center; */
  /* justify-items: start; */
  margin: 20px;
`;



export default WhoWeAre;
