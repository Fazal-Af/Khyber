import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/user.jpg";
import "./nav.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MessageIcon from "@mui/icons-material/Message";

const Nav = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      TextDecoder: isActive ? "none" : "underline",
      color: isActive ? `orange` : "black",
    };
  };
  return (
    <nav>
      <img src={img} alt="" className="imgLogo" />
      <div className="search">
        <input type="text" placeholder="Search ..." />
        <button className="btn">Search</button>
      </div>

      <div className="navlink">
        <NavLink to={"/"} style={navLinkStyle}>
          <h3>
            <HomeIcon />
          </h3>
        </NavLink>
        <NavLink to={"/about"} style={navLinkStyle}>
          {" "}
          <h3>
            <InfoIcon />
          </h3>{" "}
        </NavLink>
        <NavLink to={"/contact"} style={navLinkStyle}>
          {" "}
          <h3>
            <MessageIcon />
          </h3>{" "}
        </NavLink>
        <NavLink to={"/signin"} style={navLinkStyle}>
          {" "}
          <h3>
            <HowToRegIcon />
          </h3>{" "}
        </NavLink>
      </div>
      <div class="burger-main-container">
        <input type="checkbox" class="checkbox-container" />
        <div class="burger-container">
          <span class="start-child"></span>
          <span class="midle-child"></span>
          <span class="end-child"></span>
        </div>
        <div class="main-menu">
        <NavLink to={"/"} style={navLinkStyle}>
          <h3>
            Home
          </h3>
        </NavLink>
        <NavLink to={"/about"} style={navLinkStyle}>
          {" "}
          <h3>
           about
          </h3>{" "}
        </NavLink>
        <NavLink to={"/contact"} style={navLinkStyle}>
          {" "}
          <h3>
            contact
          </h3>{" "}
        </NavLink>
        <NavLink to={"/signin"} style={navLinkStyle}>
          {" "}
          <h3>
            sign
          </h3>{" "}
        </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
