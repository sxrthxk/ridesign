import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Brands from "../../../assets/models/BrandsModel";
import { motion } from "framer-motion";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram-color.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/youtube-color.svg";

const BrandModal = ({index, modalClose}) => {
  const brand = Brands[index];
  console.log(brand);
  return (
    <>
      
      <StyledOverlay initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={modalClose}>
        </StyledOverlay>
        {ReactDOM.createPortal(
        <StyledModal initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <StyledHeader>
          <StyledAvatar src={brand.avatar}></StyledAvatar>
          <StyledHeaderText>
            <StyledTitle>
            {brand.title}
            </StyledTitle>
            <StyledLinks>
              <StyledInstagram/>
              <StyledYoutube/>
            </StyledLinks>
            </StyledHeaderText>
          </StyledHeader>
          <StyledBody>
            <StyledShowcase src={brand.showcase}/>
            <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis pariatur sapiente. Eius nisi eveniet fugit natus ipsum assumenda harum quos ex, ut quasi omnis esse iste deserunt accusantium voluptate!</StyledDescription>
          </StyledBody>
          <StyledFooter>
            {/* <StyledButton>Visit</StyledButton> */}
          </StyledFooter>
          
        </StyledModal>
        ,document.getElementById('modal'))}
      
    </>
  );
};


const StyledInstagram = styled(Instagram)`
  width: 3rem;
  height: min-content;
  margin: 0px 20px;

`;
const StyledYoutube = styled(Youtube)`
  width: 3rem;
  height: min-content;
`;

const StyledHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAvatar = styled.img`
  width: 10rem;
  height: 10rem;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 20px;
  
`;

const StyledHeaderText = styled.div`
margin: 20px 60px;
display: flex;
flex-direction: column;
align-items: flex-end;
/* width: 25rem; */
@media only screen and (max-width: 600px) {
  margin: 0px 20px;
  flex-direction: row;
}

`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  @media only screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
  
`;



const StyledLinks = styled.div`
  display: flex;
  a{
    text-decoration: none;
    margin: 20px;
  }
`;

const StyledBody = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

`;

const StyledShowcase = styled.img`
  width: 20rem;
  /* height: auto; */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDescription = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  margin: 20px;
`;

const StyledFooter = styled.footer`
width: 100%;
height: 2rem;
`;


const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #696969e2;
  z-index: 99;
`;

const StyledModal = styled(motion.div)`
background-color: white;
border-radius: 20px;
/* padding: 50px; */
z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BrandModal;
