import React from "react";
import styled from "styled-components";

const Counter = () => {
  return (
    <StyledWrapper>
      <StyledCard>
        <h1>Clients</h1>
        <p>1,175</p>
      </StyledCard>
      <StyledCard>
        <h1>Countries</h1>
        <p>98</p>
      </StyledCard>
      <StyledCard>
        <h1>Hours Worked</h1>
        <p>44,000</p>
      </StyledCard>
    </StyledWrapper>
  );
};

const StyledCard = styled.div`
  border-radius: 1rem;
  width: 15rem;
  text-align: center;
  background-color: white;
  margin: 2rem;
  
  padding: 2rem;
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.2);
  h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      font-weight: bold;
  }
  p{
      margin: 1rem;
      font-weight: 200;
      font-size: 5rem;
  }
`;

const StyledWrapper = styled.div`
justify-content: center;
align-items: center;
flex-wrap: wrap;
  padding: 2rem;
  width: fit-content;
  display: flex;
`;

export default Counter;
