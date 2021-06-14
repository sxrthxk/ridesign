import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { StyledContainer, StyledTitle } from "../../UI";
import BlogCard from "./BlogCard";

const Blogs = ({posts}) => {
  useEffect(() => {
    Aos.init()
    window.scrollTo(0,0)
    
  }, [])
  return (
    <StyledContainer>
      <StyledTitle><span>Our</span> Blogs</StyledTitle>
      <StyledGrid>
      {posts.length ? (
        posts.map((post) => 
          <BlogCard key={post.sys.id} title={post.fields.title} id={post.sys.id} image={post.fields.hero.fields.file.url}/>
        )
      ) : null}
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
