import React from "react";
import classes from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.introContainer}>
      <h1 className={classes.title}>Github User Search</h1>
      <h5 className={classes.subTitle}>
        search any user by <b style={{ color: "red" }}>username</b>
      </h5>
    </section>
  );
};

export default Intro;
