import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../UI";
import BlogCard from "./BlogCard";

import image from '../../assets/images/photo_2021-05-25_18-15-00.jpg'
const title= "Blog Title"

const Blogs = () => {
  return (
    <StyledContainer>
      <StyledGrid>
      <BlogCard image={image} title={title}/>
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
