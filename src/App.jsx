import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Ground from "./component/ground/Ground";
import Mountain from "./component/mountain/Mountain";
import Contact from "./component/contact/Contact";
import Sign from "./component/user/Sign"
import SignUp from "./component/user/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route index path="/signin" element={<Sign/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/mountain" element={<Mountain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
