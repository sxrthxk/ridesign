import React from 'react'
import styled from 'styled-components'

const OurJourney = () => {
    return (
        <StyledWrapper>
            <StyledSection>
                <StyledYear>2017</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2018</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2019</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2020</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2021</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2022</StyledYear>
                <StyledDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad delectus iste accusamus vel, recusandae assumenda voluptates nam et quos laboriosam quidem nobis facilis. Dolor eum voluptates voluptatum animi, nihil repudiandae.</StyledDescription>
            </StyledSection>
        </StyledWrapper>
    )
}

const StyledSection = styled.section`
position: relative;
padding: 20px 0px;
scroll-behavior: smooth;
    border: 2px solid black;
    /* min-height: 20rem; */
    height: 20rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 600px) {
        height: 20rem;
        flex-direction: column;
        padding: 0 0;
        
    }
`;

const StyledYear = styled.h1`
/* height: 20rem; */
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    @media only screen and (max-width: 600px) {
        top: 10px;
        width: 100%;
        background-color: black;
        color: white;
        
    }
`;

const StyledDescription = styled.div`
`;

const StyledWrapper = styled.div`
    width: 100%;
    overflow-y: scroll;
    height: 20rem;
    background-color: white;
    @media only screen and (max-width: 600px) {
        height: 10rem;
    }
`;


export default OurJourney
