import React from "react";
import { StyledContainer, StyledHR } from "../UI";
import ServiceCard from "./ServiceCard";

import ServicesObject from '../../assets/services'

const Services = () => {
  
  return (
    <>
      <StyledContainer style={{ color: "white" }}>
        {ServicesObject.map((service) => (
          <ServiceCard title={service.title} content={service.content} />
        ))}
      </StyledContainer>
      <StyledHR />
    </>
  );
};

export default Services;
