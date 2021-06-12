import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Up } from '../assets/svg/iconmonstr-arrow-up-thin.svg'

export const StyledHR = styled.hr`
    border-radius: 50%;
    width: 90%;
    margin: 20px auto;
`;

export const StyledTop = styled(Up)`
  fill: white;
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
  const [loaded, setLoaded] = useState(false)
}
