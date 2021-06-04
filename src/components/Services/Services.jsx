import React from "react";
import { StyledContainer, StyledHR } from "../UI";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const Services = [
    { title: "Social Media Management" },
    { title: "Logo Designing" },
    { title: "Branding" },
    { title: "Content Creation" },
    { title: "Video Creation" },
    { title: "Meme Marketing" },
    { title: "Camapaign Creation" },
  ];

  return (
    <>
      <StyledContainer style={{ color: "white" }}>
        {Services.map((service) => (
          <ServiceCard title={service.title} />
        ))}
      </StyledContainer>
      <StyledHR />
    </>
  );
};

export default Services;
