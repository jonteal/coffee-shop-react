import { Link } from "react-router-dom";

export const NavLink = ({ label, location }) => (
  <Link
    className="px-2 cursor-pointer no-underline hover:underline md:text-slate-700 text-lg text-slate-50 mx-0 menu-item my-3"
    to={location}
  >
    {label}
  </Link>
);
