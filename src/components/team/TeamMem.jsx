import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./teamMem.scss";

const TeamMem = ({ img, name, designation }) => {
  return (
    <div className="member">
      <img src={img} alt={name} />
      <span className="name">{name}</span>
      <span className="designation">{designation}</span>
      <div className="contact-team">
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

export default TeamMem;
