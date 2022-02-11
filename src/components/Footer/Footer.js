//Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/gracelin95" target="_blank">
          <FaGithub
            className="github-icon"
            size={32}
            style={{ color: "black" }}
          />{" "}
        </a>
        <a href="https://www.linkedin.com/in/gracesqlin/" target="_blank">
          <FaLinkedin
            className="linkedin-icon"
            size={32}
            style={{ color: "black" }}
          />
        </a>
      </div>
      <div className="copyright"> © Grace Lin 2022 </div>
    </div>
  );
};

export default Footer;
