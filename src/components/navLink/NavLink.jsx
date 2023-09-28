import { Link } from "react-router-dom";

const NavLink = ({ label, location }) => {
  return (
    <Link
      className="px-2 cursor-pointer no-underline hover:underline text-slate-700"
      to={location}
    >
      {label}
    </Link>
  );
};

export default NavLink;
