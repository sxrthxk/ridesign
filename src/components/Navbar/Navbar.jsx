import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as HamburgerMenuLight } from "../../assets/svg/menuLight.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { ReactComponent as BrandLogoDark } from "../../assets/svg/logo-dark.svg";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  var Logo;
  isAccordionOpen ? (Logo = Cross) : (Logo = HamburgerMenuLight);



  const toggleAccordion = () => {
    setIsAccordionOpen((v) => !v);
  };

  const accordionHeight =
    "navbar-wrapper" + (isAccordionOpen ? " accordOpen" : "");
  return (
    reactDom.createPortal(
      <div className="nav-container">
    <div className={accordionHeight}>
      <div className="accordion-title">
        <BrandLogoDark className="brandlogo" />
        <h1 className="brandname">ridesignMedia</h1>
        <Logo className="hamburg" onClick={toggleAccordion} />
      </div>
      {isAccordionOpen ? (
        <div className="links">
          <StyledLink onClick={toggleAccordion} to="/">home</StyledLink>
          <StyledLink onClick={toggleAccordion} to="/services">services</StyledLink>
          <StyledLink onClick={toggleAccordion} to="/who-we-are">who we are</StyledLink>
          <StyledLink onClick={toggleAccordion} to="contact-us">contact us</StyledLink>
        </div>
      ) : null}
    </div></div>, document.getElementById("header"))
  );
};

const StyledLink = styled(Link)`
color: black;
  font-size: x-large;
  font-weight: bold;
  margin: 10px auto;
  text-decoration: none;
  `;

export default Navbar;
