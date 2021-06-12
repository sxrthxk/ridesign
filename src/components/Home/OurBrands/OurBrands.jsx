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
    console.log(index);
    setBrandIndex(index);
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };
  return (
    <StyledContainer style={{ margin: "20px auto" }}>
      <StyledWrapper>
        {Brands.map((brand, index) => (
          <StyledBrand key={brand.id}>
            <StyledAvatar
              onClick={() => {
                modalOpenHanlder(index);
              }}
              src={brand.avatar}
            />
            <h1>{brand.title}</h1>
          </StyledBrand>
        ))}
        <AnimatePresence>
          {modalOpen ? (
            <BrandModal index={brandIndex} modalClose={modalClose} />
          ) : null}
        </AnimatePresence>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 10px;
  word-wrap: break-word;
  @media only screen and (max-width: 600px) {
    h1 {
      width: auto;
      font-weight: lighter;
      font-size: 1rem;
      overflow-wrap: break-word;
      /* word-wrap: break-word; */
    }
  }
`;

const StyledWrapper = styled.div`
  height: auto;
  width: 100%;
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
  @media only screen and (max-width: 600px) {
    width: 7.5rem;
    margin: 10px;
  }
`;

export default OurBrands;
