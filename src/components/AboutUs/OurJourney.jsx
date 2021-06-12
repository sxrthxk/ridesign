import React from 'react'
import styled from 'styled-components'

const OurJourney = () => {
    return (
        <StyledWrapper>
            <StyledSection>
                <StyledYear>2017</StyledYear>
                <StyledDescription>The founder of the company Rishav Jaisani & Dheeraj Jaisani got an idea to start a media agency which will help people with Fast and Superior Quality of Promotions, content creation and logo designing.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2018</StyledYear>
                <StyledDescription>In these years, the owners of the company really worked hard to get their First hundred clients. After  Researching about the market they worked for 24×7, day and night so that they can work for more and more number of clients with punctuality.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2019</StyledYear>
                <StyledDescription>After a lot of hard work the first office was set in the city of Dewas, Madhya Pradesh. As their work quality was extremely good they started getting clients everyday and touched the milestone of one thousand clients very soon.</StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2020</StyledYear>
                <StyledDescription>As we all know that in year 2020 due to corona virus pandemic most of the buisness were shutting down but even at this peak time both the owners of the company didn't loose their hope and continued working more frequently and effectively then before from home itself. From their hard work and perseverance, brands started with collaborating with them and although the owners also started their own brand's to grow. </StyledDescription>
            </StyledSection>
            <StyledSection>
                <StyledYear>2021</StyledYear>
                <StyledDescription>And finally in 2021 they are going to launch their brands across the globe to help more and more number of people so that they can acheive aim of RIDESIGN MEDIA.</StyledDescription>
            </StyledSection>
            
        </StyledWrapper>
    )
}

const StyledSection = styled.section`
position: relative;
padding: 20px 0px;
scroll-behavior: smooth;
    /* border: 2px solid black; */
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
font-family: 'coolvetica';
/* height: 20rem; */
    /* width: 30rem; */
    min-width: 20rem;
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
display: flex;
align-items: center;
margin: 5rem;
@media only screen and (max-width: 600px){
    margin: 2rem;
}
`;

const StyledWrapper = styled.div`
font-family: 'montserrat', sans-serif;
line-height: 1.8rem;
    width: 100%;
    overflow-y: scroll;
    height: 20rem;
    background-color: white;
    @media only screen and (max-width: 600px) {
        height: 10rem;
    }
`;


export default OurJourney
