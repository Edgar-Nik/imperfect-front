import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.svg";

const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Imperfect" />
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to="/partnership">partnership</Link>
          </li>
          <li>
            <Link to="/strategy">strategy</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
