import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../UI";
import BlogCard from "./BlogCard";

import image from '../../../assets/images/photo_2021-05-25_18-14-54.jpg'
import { Link } from "react-router-dom";
const title= "First Blog"

const Blogs = () => {
  return (
    <StyledContainer>
      <StyledGrid>
      <Link to={`/blogs/${title}`}><BlogCard image={image} title={title}/></Link>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      </StyledGrid>
    </StyledContainer>
  );
};

const StyledGrid = styled.div`
width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 600px) {
      display: block;
    }
`;

export default Blogs;
