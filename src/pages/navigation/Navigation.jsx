import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import { NavLink } from "../../components/navLink/NavLink";
import { MenuDrawer } from "../../components/menuDrawer/MenuDrawer";

export const Navigation = () => {
  return (
    <>
      <div className="hidden md:h-20 md:w-full md:flex md:justify-between md:mb-6">
        <div className="flex flex-row justify-center items-center mx-0 mb-3 mt-12 w-full">
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
