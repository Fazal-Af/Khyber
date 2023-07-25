import React from "react";
import "./contact.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";

const Contact = () => {
  const navigate = useNavigate();
  const handlHome = () => {
    navigate("/");
  };

  return (
    <div className="contact-container">
      <section className="contact-section-one">
        <h1>icon 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h1>icon 2</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h1>icon 3</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className="btn" onClick={handlHome}>
          Home
        </button>
      </section>
      <section className="contact-section-two">
        <form action="">
          <TextField
            id="outlined-basic"
            type="text"
            label="Your Name"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Your Email"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            id="outlined-multiline-static"
            label="Your Message"
            multiline
            rows={4}
          />
          <TextField
            id="outlined-basic"
            type="submit"
            variant="outlined"
            value="Send"
            required
            fullWidth
            className="form-btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
