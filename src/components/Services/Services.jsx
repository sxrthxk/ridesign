import React from "react";
import { StyledContainer, StyledHR } from "../UI";
import ServiceCard from "./ServiceCard";

import ServicesObject from '../../assets/services'

const Services = () => {
  
  return (
    <>
      <StyledContainer style={{ color: "white" }}>
        {ServicesObject.map((service) => (
          <ServiceCard key={service.key} title={service.title} content={service.content} id={service.id}/>
        ))}
      </StyledContainer>
      <StyledHR />
    </>
  );
};

export default Services;
