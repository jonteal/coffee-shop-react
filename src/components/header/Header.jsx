import { FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header bg-cyan-700 py-2 flex flex-row items-center fixed top-0 left-0 w-full text-slate-50 text-center z-10 sm:justify-between">
      <div className="flex flex-row">
        <a href="">
          <FaFacebook className="px-1 text-2xl ml-3 mr-2" />
        </a>
        <a href="">
          <FaInstagram className="px-1 text-2xl mr-3" />
        </a>
      </div>
      <p className="mr-3 text-sm">MON–SAT 7:30AM–3PM · SUNDAY 9AM–4PM</p>
    </div>
  );
};

export default Header;
