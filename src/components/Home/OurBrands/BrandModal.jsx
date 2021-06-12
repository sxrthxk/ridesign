import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Brands from "../../../assets/models/BrandsModel";
import { motion } from "framer-motion";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/youtube-color.svg";
import { ReactComponent as Cross } from "../../../assets/svg/xLight.svg";
import { useState } from "react";
import axios from "axios";

const BrandModal = ({ index, modalClose }) => {
  const brand = Brands[index];
  console.log(index);
  var fontSize = "2rem";
  if (index === 4) {
    fontSize = "1.5rem";
  }
  const [loading, setLoading] = useState(true);

  const [followers, setFollowers] = useState();
  useEffect(() => {
    axios
      .get(
        `https://counts.live/api/instagram-follower-count/${brand.igHandle}/live`
      )
      .then((res) => {
        // console.log(res.data.data.followers);
        setFollowers(res.data.data.followers);

        console.log(followers);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(console.error);
  }, [followers, brand.igHandle]);
  return (
    <>
      <StyledOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={modalClose}
      ></StyledOverlay>
      {ReactDOM.createPortal(
        <StyledModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledBody>
            <StyledCross onClick={modalClose} />
            <StyledShowcase src={brand.showcase} />
            <StyledInfo>
              <StyledAvatar src={brand.avatar}></StyledAvatar>
              <StyledTitle fontSize={fontSize}>{brand.title}</StyledTitle>
              <StyledInstagramWrapper>
                <a
                  target="__blank"
                  href={`https://www.instagram.com/${brand.igHandle}/`}
                >
                  <StyledInstagram />
                </a>
                <h2>
                  {loading ? (
                    <p style={{ color: "rgba(255,255,255, 0.5)" }}>Loading</p>
                  ) : (
                    followers
                  )}
                  <p>Followers</p>
                </h2>
              </StyledInstagramWrapper>
              {brand.ytHandle && <StyledYoutube />}
            </StyledInfo>
            <StyledInsights src={brand.showcase} />
          </StyledBody>
          <StyledDescription>
            {brand.description && brand.description}
          </StyledDescription>
          <StyledFooter
            href={`https://wa.me/919340844430/?text=${encodeURI(
              `Heya, I want to promote my brand on @${brand.igHandle}, how can we proceed?`
            )}`}
            target="__blank"
          >
            <p>
              If you want to promote your brand on{" "}
              <strong>@{brand.title}</strong>, then click here.
            </p>
          </StyledFooter>
        </StyledModal>,
        document.getElementById("modal")
      )}
    </>
  );
};

const StyledCross = styled(Cross)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.2rem;
  cursor: pointer;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInstagram = styled(Instagram)`
  fill: white;

  h2 {
    display: flex;
    flex-direction: column;
  }
`;

const StyledInstagramWrapper = styled.div`
  display: flex;
  /* background-color: rgba(255, 255, 255, 0.2); */
  border-radius: 1rem;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  a {
    width: 3rem;
    height: 3rem;
    margin: 0px 10px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    a {
      width: 2rem;
      margin: 0 1.5rem;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1rem;
      font-weight: lighter;
    }
  }
`;
const StyledYoutube = styled(Youtube)`
  width: 3rem;
  height: min-content;
`;

const StyledAvatar = styled.img`
  width: 10rem;
  height: 10rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 20px;
  box-shadow: 2px 2px 15px 2px rgba(255, 255, 255, 0.3),
    -2px -2px 15px 2px rgba(255, 255, 255, 0.3),
    2px -2px 15px 2px rgba(255, 255, 255, 0.3),
    -2px 2px 15px 2px rgba(255, 255, 255, 0.3);
`;

const StyledTitle = styled.h1`
  margin: 1rem 0;
  font-size: 3rem;
  @media only screen and (max-width: 600px) {
    font-size: ${(p) => p.fontSize};
    margin: 0;
  }
`;

const StyledBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const StyledShowcase = styled.img`
  width: 10rem;
  /* height: auto; */
  margin: 2rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const StyledInsights = styled.img`
  width: 10rem;
  /* height: auto; */
  margin: 2rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDescription = styled.div`
  scroll-behavior: smooth;
  display: flex;
  align-items: center;
  margin: 20px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledFooter = styled.a`
  text-decoration: none;
  width: 100%;
  display: block;
  background-color: #25d366;
  display: flex;
  justify-content: center;
  p {
    color: black;
    margin: 0.5rem;
  }
  strong {
    color: black;
  }
  font-size: 1rem;
`;

const StyledOverlay = styled(motion.div)`
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
  z-index: 99;
`;

const StyledModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border-radius: 20px;
  /* padding: 50px; */
  overflow: hidden;
  z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 2rem;
  * {
    color: white;
  }
  @media only screen and (max-width: 786px) {
    width: 90%;
  }
`;

export default BrandModal;
