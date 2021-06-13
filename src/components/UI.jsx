import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Up } from '../assets/svg/iconmonstr-arrow-up-thin.svg'
import { Link } from 'react-router-dom'
import { keyframes } from "styled-components";


export const BackToTop = () => {
  return(<StyledContainer>
    <StyledLink to="/"><Up/></StyledLink>
    </StyledContainer>
  )
}

export const StyledHR = styled.hr`
    border-radius: 50%;
    width: 90%;
    margin: 20px auto;
`;

const StyledLink = styled(Link)`
/* background-color: rgba(255,255,255,0.2);
border-radius: 3rem;
padding: 2rem; */
margin: 2rem;

  svg{
    transform: scale(2);
    fill: white;}
    
`;

export const StyledTitle = styled.h1`
font-family: 'coolvetica', sans-serif;
letter-spacing: 2px;
  color: white;
  width: 90%;
  margin: 20px;
  font-size: 5rem;
  span{
    opacity: 50%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 4.5rem;
  }
`;

export const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const Image = ({src, alt}) => {
  const [loaded, setLoaded] = useState(false);
  const loadHandler = () => {
    console.log('loaded')
    setLoaded(true)
  }
  
  return(<>
  
     <StyledLoader display={loaded}>Loading</StyledLoader> 
    <StyledWorkImage src={src} alt={alt} onLoad={loadHandler} display={loaded}/>
   </>
  )
}

const StyledWorkImage = styled.img`
  width: 100%;
  height: 100%;
  display: ${p => p.display ? 'block' : 'none'};
  object-fit: contain;
  transition: ease-in-out 100ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLoader = styled.div`
width: 100%;
aspect-ratio: 1/1;
  color: white;
  background-color: black;
  justify-content: center;
  align-items: center;
  display: ${p => p.display ? 'none' : 'flex'};
`;