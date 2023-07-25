import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css";
import me from "../../images/user2.jpg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MessageIcon from "@mui/icons-material/Message";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate()
 
  const handHome=()=>{
    navigate('/')
  }
  return (
    <>
      <div className="about-container">
        <div className="about-child-cont-one">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
            fugiat velit veniam tenetur voluptatibus alias corrupti porro sint
            laudantium.
          </p>
          <div className="navlink">
            <NavLink to={"/"}>
              <h3>
                <HomeIcon />
              </h3>
            </NavLink>
            <NavLink to={"/about"}>
              {" "}
              <h3>
                <InfoIcon />
              </h3>{" "}
            </NavLink>
            <NavLink to={"/contact"}>
              {" "}
              <h3>
                <MessageIcon />
              </h3>{" "}
            </NavLink>
            <NavLink to={"/sign"}>
              {" "}
              <h3>
                <HowToRegIcon />
              </h3>{" "}
            </NavLink>
          </div>
          <button className="btn" onClick={handHome}>Home</button>
        </div>
        <div className="about-child-cont-two">
          <img src={me} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nesciunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
