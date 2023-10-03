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
              <TfiClose className="text-3xl mr-10 fade-in-menu" />
            ) : (
              <RxHamburgerMenu className="text-3xl mr-10 fade-in-menu" />
            )}
          </div>
        </div>
        <div className="absolute z-10 w-full mt-20 fade-in-menu">
          {isOpen && (
            <div
              className={`bg-cyan-700 opacity-90 flex flex-col ${
                isOpen && "fade-in-menu"
              } ${!isOpen && "fade-out-menu"} 
              }`}
            >
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="HOME" location="/" />
              </div>
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="ABOUT" location="about" />
              </div>
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="MENU" location="menu" />
              </div>
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="CATERING" location="catering" />
              </div>
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="CONTACT" location="contact" />
              </div>
              <div className="my-3" onClick={() => setIsOpen(false)}>
                <NavLink label="LOCATIONS" location="locations" />
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:flex flex-row justify-center items-center mx-0 mb-3 mt-16 w-full">
          <div className="w-5/12 flex flex-row justify-around ml-96">
            <NavLink label="HOME" location="/" />
            <NavLink label="ABOUT" location="about" />
            <NavLink label="MENU" location="menu" />
          </div>
          <div className="2/12">
            <Link className="logo-container" to="/">
              <img src={CoffeeIcon} className="w-56" alt="Coffee Logo" />
            </Link>
          </div>
          <div className="mr-1/2 w-5/12 flex flex-row justify-around mr-96">
            <NavLink label="CATERING" location="catering" />
            <NavLink label="CONTACT" location="contact" />
            <NavLink label="LOCATIONS" location="locations" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
