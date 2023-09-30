import { Link } from "react-router-dom";

export const NavLink = ({ label, location }) => {
  return (
    <Link
      className="px-2 cursor-pointer no-underline hover:underline text-slate-700 text-xs md:text-lg mx-0 menu-item"
      to={location}
    >
      {label}
    </Link>
  );
};
