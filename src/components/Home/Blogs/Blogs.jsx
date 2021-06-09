import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../UI";
import BlogCard from "./BlogCard";

const Blogs = ({posts}) => {

  return (
    <StyledContainer>
      <StyledGrid>
      {posts.length ? (
        posts.map((post) => 
          <BlogCard key={post.sys.id} title={post.fields.title} image={post.fields.hero.fields.file.url}/>
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
