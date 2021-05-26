import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as HamburgerMenuLight } from "../../assets/svg/menuLight.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { ReactComponent as BrandLogoDark } from "../../assets/svg/logo-dark.svg";
import reactDom from "react-dom";

const Navbar = () => {
  const [isAccordianOpen, setisAccordianOpen] = useState(false);
  var Logo;
  isAccordianOpen ? (Logo = Cross) : (Logo = HamburgerMenuLight);



  const toggleAccordion = () => {
    setisAccordianOpen((v) => !v);
  };

  const accordionHeight =
    "navbar-wrapper" + (isAccordianOpen ? " accordOpen" : "");
  return (
    reactDom.createPortal(
      <div className="nav-container">
    <div className={accordionHeight}>
      <div className="accordion-title">
        <BrandLogoDark className="brandlogo" />
        <h1 className="brandname">ridesignMedia</h1>
        <Logo className="hamburg" onClick={toggleAccordion} />
      </div>
      {isAccordianOpen ? (
        <div className="links">
          <h1>home</h1>
          <h1>what we do</h1>
          <h1>who we are</h1>
          <h1>blog</h1>
          <h1>contact us</h1>
        </div>
      ) : null}
    </div></div>, document.getElementById("header"))
  );
};

export default Navbar;
