import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer bg-cyan-700 py-2 flex flex-row justify-center items-center">
      <a href="">
        <FaFacebook className="px-1 social-icon ml-3 mr-1" />
      </a>
      <a href="">
        <FaInstagram className="px-1 social-icon ml-1 mr-3" />
      </a>

      <p className="mr-3 text-xs font-thin">
        © 2023 HILLSIDE CAFE. ALL RIGHTS RESERVED. WEB DESIGN BY JON JACKSON.
      </p>
    </div>
  );
};

export default Footer;
