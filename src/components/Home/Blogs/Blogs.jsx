import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../UI";
import BlogCard from "./BlogCard";

import image from '../../../assets/images/photo_2021-05-25_18-14-54.jpg'

const title= "First Blog"

const Blogs = (posts) => {

  
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
margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 768px) {
      display: block;
    }
`;

export default Blogs;
