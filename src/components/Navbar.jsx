import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Navbar.module.css";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const params = useParams();
  return (
    <nav className={classes.navbar}>
      {params.login && (
        <Link to="/" className={classes.navlink}>
          <i class="fa fa-search"></i> Search
        </Link>
      )}
      {!params.login && <p className={classes.navlink}>Rita Mak | Challenge</p>}
    </nav>
  );
};

export default Navbar;
