import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MessageIcon from "@mui/icons-material/Message";
const Footer = () => {
  return (
    <footer>
      <div className='footer-div footer-left'></div>
      <div className='footer-div footer-middle'>
        <h1>Muhammad Ghani</h1>
         <div className='footer-link'>
          <NavLink to={'/facebook'} target='_blank'><p><HomeIcon/></p></NavLink>
          <NavLink to={'/instag'} target='_blank'><p><InfoIcon/></p></NavLink>
          <NavLink to={'/github'} target='_blank'><p><HowToRegIcon/></p></NavLink>
          <NavLink to={'/myport'} target='_blank'><p><MessageIcon/></p></NavLink>
         </div>
         <marquee>&copy; Ghani 2023 All right reserved</marquee>
      </div>
      <div className='footer-div footer-right'></div>
    </footer>
  )
}

export default Footer
