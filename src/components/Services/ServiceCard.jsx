import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, content, id, serviceImage }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <StyledCard>
      <StyledImage data-aos="fade-down" src={serviceImage}></StyledImage>
      <StyledWrapper>
        <span id={id}></span>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{content}</StyledDescription>
        <StyledCTA>
          <StyledLink
            target="__blank"
            href={`https://wa.me/919340844430/?text=${encodeURI(
              `Heya, I need to order the ${title} service, how can we proceed?`
            )}`}
          >
            Whatsapp
          </StyledLink>

          <StyledRouterLink to="/contact-us">Contact Us</StyledRouterLink>
        </StyledCTA>
      </StyledWrapper>
    </StyledCard>
  );
};

const StyledRouterLink = styled(Link)`
  font-family: "montserrat", sans-serif;
  text-decoration: none;
  margin: 0px 20px;
  background-color: transparent;

  color: teal !important;
  border: 2px solid teal;
  box-sizing: border-box;
  padding: 15px 45px;
  border-radius: 5px;

  position: relative;
  &::after {
    background-color: teal;
    content: "";
    height: 1px;
    /* width: calc(100% - 90px); */
    width: 0px;
    position: absolute;
    bottom: 12px;
    left: 45px;
    transition: 0.2s ease-out;
  }

  @media only screen and (max-width: 786px) {
    padding: 10px 15px;
  }
  &:hover::after {
    transition: 0.2s ease-out;
    width: calc(100% - 90px);
  }
`;

const StyledLink = styled.a`
  font-family: "montserrat", sans-serif;
  text-decoration: none;
  margin: 0px 20px;
  background-color: teal;
  border: 2px solid teal;
  box-sizing: border-box;
  padding: 15px 45px;
  border-radius: 5px;
  color: white;

  position: relative;
  &::after {
    content: "";
    height: 1px;
    /* width: calc(100% - 90px); */
    width: 0px;
    position: absolute;
    bottom: 12px;
    left: 45px;
    transition: 0.2s ease-out;
    background-color: white;
  }
  @media only screen and (max-width: 786px) {
    padding: 10px 15px;
  }
  &:hover::after {
    transition: 0.2s ease-out;
    width: calc(100% - 90px);
  }
`;

const StyledCTA = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* width: 80%; */
`;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  /* padding: 20px; */
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* &:before{
      display: block;
      content: "";
      margin-top: -558px;
      height: 558px;
      visibility: hidden;
      pointer-events: none;
    } */
  span {
    position: absolute;
    top: -164px;
  }
  @media only screen and (max-width: 600px) {
    span {
      top: -128px;
    }
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin: auto;
  width: 100%;
  /* background: linear-gradient(to right, #121122, #121121, #144122); */
  font-size: 3rem;
`;

const StyledCard = styled.div`
  z-index: 2;
  overflow: hidden;

  &:last-child ${StyledWrapper} ${StyledTitle} {
    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  /* box-shadow: -2px -2px 2px #27272792; */
  display: flex;
  align-items: center;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    &:nth-child(odd) {
      flex-direction: column;
    }
  }
`;

const StyledImage = styled.img`
  margin: 40px 40px;
  width: 40%;
  height: 100%;
  @media only screen and (max-width: 786px) {
    width: 90%;
    margin: 30px auto;
  }
`;

const StyledDescription = styled.div`
  width: 90%;
  font-family: "montserrat", sans-serif;
  line-height: 2rem;
  margin: 20px 0px;
  font-weight: lighter;
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media only screen and (max-width: 786px) {
    width: 80%;
  }
`;

export default ServiceCard;
