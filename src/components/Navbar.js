import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "react-switch";
import logo from "../assets/logo.png";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} px-3`}>
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
        Project Management Tool
      </Link>
      <div>
        <Switch onChange={toggleTheme} checked={darkMode} />
        <Link className="btn btn-outline-primary ms-2" to="/login">Login</Link>
        <Link className="btn btn-primary ms-2" to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
