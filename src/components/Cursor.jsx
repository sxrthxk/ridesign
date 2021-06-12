import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({
    x: -50,
    y: -50,
  });

  function moveHandler(e) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    document.addEventListener("mousemove", moveHandler);
    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <>
      
      <StyledCursonSecondary
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
    </>
  );
};

const StyledCursonSecondary = styled.div`
pointer-events: none;
position: fixed;
top: 0;
  left: 0;
  transform: translate(-50%,-50%);
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease-out;
  z-index: 9999;
  width: 10px;
  height: 10px;
  @media only screen and (max-width: 786px){
    display: none;
}
`;

export default Cursor;
