import React from "react";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Intro from "../components/Intro";

const Search = () => {
  return (
    <Layout>
      <Intro />
      <SearchBar />
    </Layout>
  );
};

export default Search;
