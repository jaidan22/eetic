import React from "react";
import "./footer.scss";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <span>Copyright &copy; Brand 2022</span>
      <div className="contactC">
        <FontAwesomeIcon
          style={{ color: "#fff" }}
          className="icon"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          style={{ color: "#fff" }}
          className="icon"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          style={{ color: "#fff" }}
          className="icon"
          icon={faLinkedin}
        />
      </div>
    </div>
  );
};

export default Footer;
