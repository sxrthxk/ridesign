import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as HamburgerMenuLight } from "../../assets/svg/menuLight.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { ReactComponent as BrandLogoLight } from "../../assets/svg/logo-light.svg";
import {motion, AnimateSharedLayout} from 'framer-motion'

const Navbar = () => {
  const [isAccordianOpen, setisAccordianOpen] = useState(false);
  var Logo;
  isAccordianOpen ? (Logo = Cross) : (Logo = HamburgerMenuLight);

  const toggleAccordion = () => {
    setisAccordianOpen((v) => !v);
  };

  
  

  // const accordionHeight = "navbar-wrapper" + (isAccordianOpen ? " openAccord" : "");
  return (
    <motion.div
      
    className="navbar-wrapper">
      <div className="accordion-title">
        <BrandLogoLight className="brandlogo" />
        <h1 className="brandname">ridesignMedia</h1>
        <Logo className="hamburg" onClick={toggleAccordion} />
      </div>
      {isAccordianOpen ? <><h1>home</h1>
      <h1>what we do</h1>
      <h1>who we are</h1>
      <h1>blog</h1>
      <h1>contact us</h1></> : null}
    </motion.div>
  );
};

export default Navbar;
