import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as BrandLogoLight } from "../../assets/svg/logo-light.svg";

const NavNew = () => {
  return (
    <StyledHeader>
      <StyledLogo></StyledLogo>
      {/* <StyledBrandName>ridesignMedia</StyledBrandName> */}
      <StyledList>
        <StyledLink to="/">home</StyledLink>
        <StyledLink to="/services">services</StyledLink>
        <StyledLink to="/about-us">about us</StyledLink>
        <StyledLink to="/blogs">blogs</StyledLink>
        <StyledLink to="/contact-us">contact us</StyledLink>
      </StyledList>
    </StyledHeader>
  );
};
const grad = keyframes`

    from {
      background-position-x: left;
    }
    to {
      background-position-x: right;
    }
  `;

const StyledList = styled.ul`
  display: flex;
  margin: 0px 20px;
  list-style: none;
`;

const StyledLink = styled(Link)`
text-transform: uppercase;
  color: white;
  text-decoration: none;
  margin: 0px 2rem;
  font-size: 1.5rem;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-color: gray;
    color: grey;
width: 0;
    bottom: 0;
    height: 2px;
    left: 0;
    /* right: 0; */
    margin: -2px auto;
    transition: 0.2s ease all;
}
&:hover::after {
    width: 120%;
    transition: 0.3s ease all;
}
`;

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 10;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background: rgba(255, 255, 255, 0.75); */
  background-color: rgba(78, 78, 78, 0.37);
  box-shadow: 0 8px 32px 32px rgba(27, 27, 27, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
`;
const StyledLogo = styled(BrandLogoLight)`
  width: 3.5rem;
  height: 3.5rem;
`;

const StyledBrandName = styled.h1`
  justify-self: center;
  user-select: none;
  background: -webkit-linear-gradient(
    180deg,
    rgb(150, 150, 150),
    #131313,
    rgb(150, 150, 150),
    #131313,
    rgb(150, 150, 150),
    #131313,
    rgb(150, 150, 150),
    #131313,
    rgb(150, 150, 150)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position-x: left;
  /* animation: ${grad} 5s linear infinite; */
`;

export default NavNew;
