import React from 'react'
import styled from 'styled-components';

const TeamCard = ({avatar, name, designation}) => {
    return (
        <StyledCard>
            <StyledAvatar>{avatar}</StyledAvatar>
            <StyledName>{name}</StyledName>
            <StyledDesignation>{designation}</StyledDesignation>
        </StyledCard>
    )
}

const StyledCard = styled.div`
  background-color: white;
  padding: 40px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  box-shadow: -2px 2px 2px rgba(255,255,255,0.2);
`;

const StyledAvatar = styled.div`
    height: 4.5rem;
    font-size: 3rem;
    aspect-ratio: 1/1;
`;

const StyledName = styled.h1`
    margin-top: 40px;
    font-size: 1.5rem;
    margin-bottom: 0px;
`;

const StyledDesignation = styled.h3`
    margin-top: 0px;
    line-height: 1rem;
    font-size: 85%;
    color: rgba(100,100,100,1)

`;



export default TeamCard
