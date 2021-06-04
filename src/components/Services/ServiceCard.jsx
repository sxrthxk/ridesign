import React from "react";
import styled from "styled-components";

const ServiceCard = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: -2px -2px 2px #27272792;
`;

export default ServiceCard;
