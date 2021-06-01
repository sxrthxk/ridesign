import "./Footer.css";

import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Mail } from "../../assets/svg/email.svg";

const Footer = () => {
  return (
    <div className="foot">
      <div className="contact">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/ridesignmedia/"
        >
          <Instagram className="cnt-items" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://in.linkedin.com/in/ridesignmedia"
        >
          <LinkedIn className="cnt-items" />
        </a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <Mail className="cnt-items" />
        </a>
      </div>
      <div className="copyright">© 2021 RiDesign. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
