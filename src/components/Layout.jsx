import React from "react";
import Navbar from "./Navbar";
import classes from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className={classes.pageWrapper}>{children}</section>
    </main>
  );
};

export default Layout;
