import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import { NavLink } from "../../components/navLink/NavLink";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

import "./navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:h-20 md:w-full md:flex md:justify-between md:mb-6 flex flex-row justify-end">
        <div
          onClick={handleOpenDrawer}
          className="flex flex-col md:hidden mt-8 text-slate-800 absolute z-10 w-full"
        >
          <div className="mr-5 flex flex-row justify-end w-full">
            {isOpen ? (
              <TfiClose className="text-3xl mr-10" />
            ) : (
              <RxHamburgerMenu className="text-3xl mr-10" />
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "expandable" : ""
          } absolute z-10 w-full mt-20 fade-in-menu`}
        >
          {isOpen && (
            <div
              className={`bg-cyan-700 opacity-90 flex flex-col ${
                isOpen ? "fade-in-menu" : "fade-out-menu"
              }`}
            >
              <NavLink label="HOME" location="/" />
              <NavLink label="ABOUT" location="about" />
              <NavLink label="MENU" location="menu" />
              <NavLink label="CATERING" location="catering" />
              <NavLink label="CONTACT" location="contact" />
              <NavLink label="LOCATIONS" location="locations" />
            </div>
          )}
        </div>

        <div className="hidden md:flex flex-row justify-center items-center mx-0 mb-3 mt-12 w-full">
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
