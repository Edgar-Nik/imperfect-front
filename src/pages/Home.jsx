import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../assets/css/homepage.css";
import MainCircle from "../components/common/MainCircle";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`homepage page-height-container ${
        openMenu ? "menu-active" : ""
      }`}
    >
      <Helmet>
        <title>Home | Imperfect</title>
      </Helmet>
      <div className="text-block">
        <MainCircle />
        <h1 onClick={handleOpenMenu} className="start">
          WHO?
        </h1>
        <ul className="main-menu">
          <li>
            <Link to="/search/filmmakers">filmmakers</Link>
          </li>
          <li>
            <Link to="/search/performers">performing artists</Link>
          </li>
          <li>
            <Link to="/search/production-managers">production crew</Link>
          </li>
          <li>
            <Link to="/search/fine-arts">fine arts</Link>
          </li>
          {/* <li>
            <Link to="">professionals</Link>
          </li> */}
          <li>
            <Link to="/search/musicians">musicians</Link>
          </li>
          <li>
            <Link to="/search/designers">designers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
