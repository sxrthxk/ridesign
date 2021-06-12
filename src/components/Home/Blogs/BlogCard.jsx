import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogCard = ({ title, image }) => {
  return (
    <StyledLink  to={`/blogs/${title}`}>
      <StyledWrapper data-aos="fade-up">
        <StyledHero src={image} />
        <StyledTitle>{title}</StyledTitle>
      </StyledWrapper>
    </StyledLink>
  );
};

const StyledWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  /* display: flex; */
  /* margin: 20px; */
  box-shadow: 2px 2px 2px 1px rgba(255, 255, 255, 0.1);
  position: relative;
`;

const StyledHero = styled.img`
  /* background: linear-gradient(red,blue,green); */
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledTitle = styled.h1`
  font-size: 1.2rem;
  /* margin: 20px; */
  position: absolute;
  color: white;
  font-weight: lighter;
  bottom: 0%;
  left: 0;
  background-color: white;
  word-break: normal;
  width: 90%;
  padding: 20px;
  padding-top: 40px;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
`;

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  color: black;
  &:hover ${StyledTitle} {
    text-decoration: underline;
  }
`;
export default BlogCard;
