import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import classes from "../styles/User.module.css";

const User = () => {
  const [user, setUser] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://api.github.com/users/${location.pathname.substring(1)}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        fetch(
          `https://api.github.com/users/${location.pathname.substring(1)}/repos`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);
            setUserRepos(data);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [location.pathname]);

  if (!user) {
    return <p>Loading user...</p>;
  }
  return (
    <Layout>
      <section className={classes.pageWrapper}>
        <div className={classes.userContainer}>
          <img
            src={user.avatar_url}
            alt={user.name}
            className={classes.userImage}
          />
          <div>
            <li>
              <b className={classes.userList}>Username: </b>
              {user.login}
            </li>
            {user.name && (
              <li>
                <b className={classes.userList}>Name: </b>
                {user.name}
              </li>
            )}
            <li>
              <b className={classes.userList}>Repos: </b>
              {user.public_repos}
            </li>
          </div>
        </div>
        {userRepos.length > 0 ? (
          <div className={classes.repoBoxWrapper}>
            <div className={classes.repoBox}>
              {userRepos.map((repo, index) => {
                return (
                  <li key={index}>
                    <a href={repo.html_url}>{repo.full_name}</a>
                  </li>
                );
              })}
            </div>
          </div>
        ) : (
          <p>No repos found</p>
        )}
      </section>
    </Layout>
  );
};

export default User;
