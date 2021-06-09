import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const BrandModal = ({title, modalClose}) => {
  return (
    <>
      
      <StyledOverlay onClick={modalClose}>
        {ReactDOM.createPortal(
        <StyledModal>
          <h1 onClick={modalClose}>{title} <p style={{fontSize: '1rem'}}>Description for {title}</p> </h1>
        </StyledModal>
        ,document.getElementById('modal'))}
      </StyledOverlay>
      
    </>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #696969e2;
  z-index: 100;
`;

const StyledModal = styled.div`
background-color: white;
border-radius: 20px;
padding: 50px;
z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BrandModal;
