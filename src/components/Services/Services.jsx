import React from "react";
import { StyledContainer, StyledHR } from "../UI";
import ServiceCard from "./ServiceCard";


import ServicesObject from "../../assets/models/Services";

const Services = () => {
  return (
    <>
      <StyledContainer style={{ color: "white" }}>
        {ServicesObject.map((service) => (
          <ServiceCard
          
            key={service.key}
            title={service.title}
            content={service.content}
            id={service.id}
            serviceImage={service.image}
          />
        ))}
      </StyledContainer>
      <StyledHR />
    </>
  );
};


export default Services;
