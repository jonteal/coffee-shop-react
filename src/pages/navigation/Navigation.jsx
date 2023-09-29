import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import NavLink from "../../components/navLink/NavLink";

export const Navigation = () => {
  return (
    <>
      <div className="h-20 w-full flex justify-between mb-6">
        <div className="flex flex-row justify-center items-center mx-0 mb-3 mt-12">
          <NavLink label="HOME" location="/" />
          <NavLink label="ABOUT" location="about" />
          <NavLink label="MENU" location="menu" />
          <Link className="logo-container" to="/">
            <img src={CoffeeIcon} className="w-20" alt="Coffee Logo" />
          </Link>
          <NavLink label="CATERING" location="catering" />
          <NavLink label="CONTACT" location="contact" />
          <NavLink label="LOCATIONS" location="locations" />
        </div>
      </div>

      <Outlet />
    </>
  );
};
