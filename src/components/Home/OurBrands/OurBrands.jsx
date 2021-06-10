import React from "react";

import styled from "styled-components";
import { useState } from "react";
import BrandModal from "./BrandModal";
import Brands from "../../../assets/models/BrandsModel";
import { StyledContainer } from "../../UI";
import { AnimatePresence } from "framer-motion";

const OurBrands = () => {

  

  const [modalOpen, setModalOpen] = useState(false);
  // const [title, setTitle] = useState("")
  const [brandIndex, setBrandIndex] = useState();
  const modalOpenHanlder = (index) => {
    console.log(index)
    setBrandIndex(index);
    setModalOpen(true)
  };
  const modalClose = () => {
    setModalOpen(false)
  }
  return (
    <StyledContainer style={{ margin: "20px auto" }}>
      <StyledWrapper>
        { Brands.map((brand,index) => <StyledAvatar itemID={brand.title} onClick={() => {modalOpenHanlder(index)}} src={brand.avatar} />)
        }
        <AnimatePresence >
        {modalOpen ? <BrandModal index={brandIndex} modalClose={modalClose} /> : null}
        </AnimatePresence>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
user-select: none;
`;


const StyledAvatar = styled.img`
  width: 10rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border-radius: 50%;
  margin: 20px;
  @media only screen and (max-width: 600px){
    width: 7.5rem;
  }
`;

export default OurBrands;
