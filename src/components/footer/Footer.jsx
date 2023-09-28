import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer bg-cyan-700 py-2 flex flex-row justify-center items-center fixed bottom-0 left-0 w-full text-slate-50 text-center z-10">
      <a href="">
        <FaFacebook className="px-1 text-4xl ml-3 mr-1" />
      </a>
      <a href="">
        <FaInstagram className="px-1 text-4xl ml-1 mr-3" />
      </a>

      <p className="text-xs font-thin">
        © 2023 HILLSIDE CAFE. ALL RIGHTS RESERVED. WEB DESIGN BY JON JACKSON.
      </p>
    </div>
  );
};
