import React from "react";
import classes from "../styles/SearchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const searchHandler = async (event) => {
    event.preventDefault();

    await fetch(`https://api.github.com/users/${event.target.search.value}`)
      .then((response) => response.json())

      .then((data) => {
        navigate(`/${data.login}`, { replace: true });
      })

      .catch((error) => console.error(error));
  };
  return (
    <form className={classes.searchForm} onSubmit={searchHandler}>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        className={classes.searchInput}
      />
      <button type="submit" className={classes.searchButton}>
        <i class="fa fa-search" style={{ borderRadius: "50px" }}></i>
      </button>
    </form>
  );
};

export default SearchBar;
