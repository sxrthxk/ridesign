import { ReactComponent as Whatsapp } from "../../assets/svg/whatsapp.svg";
import styled from "styled-components";

const FAB = () => {
  return (
    <StyledFab href="https://wa.me/{whatsappphonenumber}/?text={urlencodedtext}">
      <StyledText>How can we help you</StyledText>
      <StyledLogo>
        <Whatsapp />
      </StyledLogo>
    </StyledFab>
  );
};

const StyledFab = styled.a`
text-decoration: none;
  border-radius: 40px;
  background-color: rgb(26,26,26);
  padding: 10px 15px ;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-content: center;

  margin: 20px;
  position: fixed;
  bottom: 0;
  right: 0;
`;

const StyledLogo = styled.div`
  margin: auto;
  /* margin-right: 10px; */
  img {
      height: 2.5rem;
      width: 2.5rem;
  }
  svg{
      fill: #25D366;
  }
  
`;

const StyledText = styled.div`
  color: white;
  margin-right: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 786px) {
      font-size: 1rem;
  }
`;

export default FAB;
