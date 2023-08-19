import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CoffeeIcon from "../../assets/coffee-logo.jpg";

import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <img src={CoffeeIcon} className="logo" alt="Coffee Logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="about">
            ABOUT
          </Link>
          <Link className="nav-link" to="menu">
            MENU
          </Link>
          <Link className="nav-link" to="catering">
            CATERING
          </Link>
          <Link className="nav-link" to="contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="locations">
            LOCATIONS
          </Link>
          {/* <Link className="nav-link nav-book-button" to="rentals">
            BOOK WITH US
          </Link> */}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
