import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <div className="header bg-slate-500 py-2">
      <div className="flex flex-row">
        <a href="">
          <FaFacebook className="px-1" />
        </a>
        <a href="">
          <FaInstagram className="px-1" />
        </a>
      </div>
    </div>
  );
};

export default Header;
