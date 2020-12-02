import { IconButton } from "@material-ui/core";
import { Forum as ForumIcon, Person as PersonIcon } from "@material-ui/icons";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
        className="header__logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  );
};

export default Header;
