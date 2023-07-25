import React from "react";
import "./sign.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useNavigate } from "react-router-dom";
import Nav from "../nav/Nav";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="sign-container">
      <h1 className="mainHeading">Sign In</h1>
      <div className="sign-child-one">
        <form action="">
          <TextField
            id="outlined-basic"
            type="email"
            label="Your Email"
            variant="outlined"
            required
            fullWidth
          />

          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              required
            />
          </FormControl>
          <TextField
            id="outlined-basic"
            type="submit"
            variant="outlined"
            value="SignIn"
            required
            fullWidth
            className="form-btn"
          />
        </form>
        <button onClick={handlSignUp} className="btn ">SignUp</button>
      </div>
    </div>
  );
};

export default Sign;
