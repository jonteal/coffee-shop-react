import { FaFacebook, FaInstagram } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <div className="header bg-slate-500 py-2 flex flex-row justify-between items-center">
      <div className="flex flex-row">
        <a href="">
          <FaFacebook className="px-1 social-icon ml-3 mr-2" />
        </a>
        <a href="">
          <FaInstagram className="px-1 social-icon" />
        </a>
      </div>
      <div>
        <p className="mr-3 text-sm">MON–SAT 7:30AM–3PM · SUNDAY 9AM–4PM</p>
      </div>
    </div>
  );
};

export default Header;
