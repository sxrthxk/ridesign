import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";

const Counter = () => {
  return (
    <StyledWrapper>
      <StyledCard>
        <h1>Clients</h1>
        <CountUp start={0} end={1175} duration={0.5}>
          {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start}>
              <p ref={countUpRef}>1,175</p>
            </ReactVisibilitySensor>
          )}
        </CountUp>
      </StyledCard>
      <StyledCard>
        <h1>Countries</h1>
        <CountUp start={0} end={98} duration={0.5}>
          {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start}>
              <p ref={countUpRef}>1,175</p>
            </ReactVisibilitySensor>
          )}
        </CountUp>
      </StyledCard>
      <StyledCard>
        <h1>Hours Worked</h1>
        <CountUp start={0} end={45634} duration={0.5}>
          {({ countUpRef, start }) => (
            <ReactVisibilitySensor onChange={start}>
              <p ref={countUpRef}>1,175</p>
            </ReactVisibilitySensor>
          )}
        </CountUp>
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
    color: black;
  }
  p {
    margin: 1rem;
    font-weight: 200;
    font-size: 5rem;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 3rem;
    }
  }
`;

const StyledWrapper = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  width: fit-content;
  display: flex;
`;

export default Counter;
