import React from 'react'
import styled from 'styled-components'

const BlogCard = ({title, image}) => {
    return (
            <StyledWrapper>
                <StyledHero src={image}/>
                <StyledTitle>{title}</StyledTitle>

            </StyledWrapper>
    )
}



const StyledWrapper = styled.div`
    background-color: white;
    width: auto;
    height: 160px;
    box-sizing: border-box;
    display: flex;
    margin: 20px;
    box-shadow: 2px 2px 2px 1px rgba(255,255,255,0.1);
`;

const StyledHero = styled.img`
/* background: linear-gradient(red,blue,green); */
    width: 160px;
    height: 100%;
`;

const StyledTitle = styled.h1`
font-size: 1.2rem;
    margin: 20px;
`;

export default BlogCard
