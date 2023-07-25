import React from "react";
import Nav from "../nav/Nav";
import img1 from "../../images/babi.jpg";
import img2 from "../../images/user2.jpg";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const moreHandleGrond = () => {
    navigate("/ground");
  };
  const moreHandleMount=()=>{
    navigate('/mountain')
  }

  return (
    <header>
      <Nav />
      <div className="header-container-start">
        <h1>BEAUTIES OF DISTRIC KHYBER </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
          aspernatur!
        </p>
        <div className="header-navLink">
          <button className="btn" onClick={moreHandleGrond}>Ground</button>
          <button className="btn" onClick={moreHandleMount}>Mountain</button>
        </div>
      </div>
      <div className="header-container-midle">
        <div className="midl-child-one">
          <img src={img1} alt="" />
          <article>
            <h2>Grounded Area</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet
            assumenda magnam! Lorem Lore ipsum dolor sit. ipsum dolor sit amet ipsum dolor sit amet. consectetur adipisicing elit. Tempore, ab.
            <button className="btn" onClick={moreHandleGrond}>
              More
            </button>
          </article>
        </div>
        <div className="midl-child-two">
          <article>
            <h2>Mountain Area</h2>
            asperiores expedita, vel repellat pariatur  et quam
            assumenda magnam! Lorem ipsum dolor Lorem ipsum dolor sit. sit amet consectetur adipisicing elit. Repellendus, esse!
            <button className="btn " onClick={moreHandleMount}>More</button>
          </article>
          <img src={img2} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
