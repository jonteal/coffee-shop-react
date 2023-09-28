import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import NavLink from "../../components/navLink/NavLink";

const Navigation = () => {
  return (
    <Fragment>
      <div className="h-20 w-full flex justify-between mb-6">
        <div className="flex flex-row justify-center items-center mx-auto mb-3 mt-12">
          <NavLink label="HOME" location="/" />
          <NavLink label="ABOUT" location="about" />
          <NavLink label="MENU" location="menu" />
          <Link className="logo-container" to="/">
            <img src={CoffeeIcon} className="logo w-28" alt="Coffee Logo" />
          </Link>
          <NavLink label="CATERING" location="catering" />
          <NavLink label="CONTACT" location="contact" />
          <NavLink label="LOCATIONS" location="locations" />
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
