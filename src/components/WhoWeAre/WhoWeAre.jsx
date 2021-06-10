import React from "react";
import styled from "styled-components";
import { StyledContainer, StyledHR } from "../UI";
import TeamCard from './TeamCard'
import LogoVid from '../../assets/videos/logo-anim.mp4'

const WhoWeAre = () => {
  return (
    <>
      <StyledContainer>
        <StyledBrandDescription>
          <StyledBrandText>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse deleniti rerum autem explicabo ipsum officiis sunt non, eaque accusamus doloribus nisi similique perferendis omnis ipsam, ullam assumenda totam? Cumque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse deleniti rerum autem explicabo ipsum officiis sunt non, eaque accusamus doloribus nisi similique perferendis omnis ipsam, ullam assumenda totam? Cumque.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse deleniti rerum autem explicabo ipsum officiis sunt non, eaque accusamus doloribus nisi similique perferendis omnis ipsam, ullam assumenda totam? Cumque.
          </StyledBrandText>
          <StyledBrandLogo>
            <StyledVideo width="320" height="240" autoPlay={true} muted loop={true} controls={false} unselectable>

              <source src={LogoVid} type="video/mp4"/>
              <h1>Your Browser does not support videos</h1>
            </StyledVideo>
          </StyledBrandLogo>
        </StyledBrandDescription>

        <StyledTeamsWrapper>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
          <TeamCard avatar="😀" name="First Name" designation="CEO"/>
        </StyledTeamsWrapper>
      </StyledContainer>
      <StyledHR/>
    </>
  );
};

const StyledVideo =  styled.video`
  width: 20rem;
  height: 20rem;
`;

const StyledBrandDescription = styled.div`
  display: flex;
  grid-template-columns: 2fr 1fr;
  margin: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;

  }
`;

const StyledBrandText = styled.p`
  color: white;
  word-wrap: normal;
  font-size: 1.5rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }

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
