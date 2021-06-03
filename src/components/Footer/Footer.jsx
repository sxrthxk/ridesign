import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/svg/email.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledContacts>
        <StyledLinks
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/ridesignmedia/"
        >
          <Instagram />
        </StyledLinks>
        <StyledLinks
          target="_blank"
          rel="noreferrer noopener"
          href="https://in.linkedin.com/in/ridesignmedia"
        >
          <LinkedIn />
        </StyledLinks>
        <StyledLinks
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/ridesignmedia/"
        >
          <Mail />
        </StyledLinks>
      </StyledContacts>
      <StyledCopyright>© 2021 RiDesign. All Rights Reserved.</StyledCopyright>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  bottom: 0;
  width: 100%;
  margin: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StyledContacts = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
`;

const StyledLinks = styled.a`
  border: 2.5px solid rgb(95, 95, 95);
  border-radius: 50%;
  transition: 0.5s ease;
  margin: 10px;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  padding: 5px;
  svg {
    margin: 10px;
    fill: white;
    transition: 0.5s ease;
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    width: auto;
    svg {
      height: 1rem;
      width: 1rem;
    }
  }
  &:hover{
  border: 2.5px solid orange;

  }
  &:hover svg {
    fill: orange;

  }
`;

const StyledCopyright = styled.h1`
  color: white;
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default Footer;
