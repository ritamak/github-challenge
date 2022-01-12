import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className={classes.navbar}>
      {location.pathname !== "/" && (
        <Link to="/" className={classes.navlink}>
          <i class="fa fa-search"></i> Search
        </Link>
      )}
      {location.pathname === "/" && (
        <p className={classes.navlink}>Rita Mak | Challenge</p>
      )}
    </nav>
  );
};

export default Navbar;
