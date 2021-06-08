import React from "react";
import { StyledContainer } from "../UI";
import MalesSoul from "../../assets/images/malessoul_46589854_2237446246579769_4953716048281993216_n.jpg";
import Dewasiii from '../../assets/images/dewasiii_120956438_818798792201163_5267913096611987608_n.jpg'
import wtfexit from '../../assets/images/wtfexit_126513242_864700640936486_6939006572902981545_n (1).jpg'
import styled from "styled-components";
import { useState } from "react";
import BrandModal from "./BrandModal";

const OurBrands = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("")
  const modalOpenHanlder = (e) => {
      setModalOpen(true)
    console.log(e.target.attributes[0].nodeValue);
    setTitle(e.target.attributes[0].nodeValue)
  };
  const modalClose = () => {
      setModalOpen(false)
  }
  return (
    <StyledContainer style={{ margin: "20px auto"}}>
        <StyledWrapper>
      <StyledAvatar itemID="Males Soul" onClick={modalOpenHanlder} src={MalesSoul} />
      <StyledAvatar itemID="Dewasii" onClick={modalOpenHanlder} src={Dewasiii} />
      <StyledAvatar itemID="wtfexit" onClick={modalOpenHanlder} src={wtfexit} />
      {modalOpen ? <BrandModal title={title} modalClose={modalClose}/> : null}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
`;


const StyledAvatar = styled.img`
  width: 10rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border-radius: 50%;
  margin: 20px;
`;

export default OurBrands;
