import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import { NavLink } from "../../components/navLink/NavLink";
import { MenuDrawer } from "../../components/menuDrawer/MenuDrawer";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
    console.log("isOpen: ", isOpen);
  };
  return (
    <>
      <div className="md:h-20 md:w-full md:flex md:justify-between md:mb-6">
        <div
          onClick={handleOpenDrawer}
          className="flex flex-col md:hidden mt-10 text-slate-800 absolute z-10"
        >
          <div className="ml-10">
            {isOpen ? (
              <TfiClose className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </div>
          {isOpen && (
            <div className="bg-cyan-700 opacity-90 flex flex-col">
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
