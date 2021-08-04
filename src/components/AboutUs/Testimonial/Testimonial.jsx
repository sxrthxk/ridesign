import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Quote } from '../../../assets/svg/quote.svg'

const Testimonial = ({testimonial}) => {


    return (
        <StyledCard>
            <StyledQuote gradient={testimonial.gradient}>
                <Quote/>
                <p>{testimonial.quote}</p></StyledQuote>
            <StyledInfo>
            <StyledAvatar src={testimonial.avi}/>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.designation}</p>
            </StyledInfo>
        </StyledCard>
    )
}

const StyledQuote = styled.div`
display: flex;
text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
    font-weight: bold;
    width: 15rem;
    /* background-color: teal; */
    /* background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 
    99.8% );; */

    background-image: ${props => props.gradient};
    padding: 2rem;
    color: white;
    letter-spacing: 1px;
    h1 {
        min-width: 40%;
        font-size: 5rem;
    }
    svg{
        fill: white;
        height: 5rem;
        /* width: 5rem; */
        min-width: 40%;
        box-sizing: border-box;
        padding-right: 3rem;
    }
`;

const StyledAvatar = styled.img`
left: 1.5rem;
border: 2px solid white;
top: -1.5rem;
    height: 5rem;
    position: absolute;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
`;

const StyledInfo = styled.div`
box-sizing: border-box;
padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
position: relative;
h3,p {
    margin: 0.8rem 0rem;
    padding: 0;
}

p{
    color: gray;
}
`;

const StyledCard = styled.div`
margin: 2.5rem;
overflow: hidden;
border-radius: 1rem;
/* padding: 1rem; */
width: fit-content;
    background-color: white;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);

    @media only screen and (max-width: 868px) {
        margin: 2rem;
    }
`;

export default Testimonial
