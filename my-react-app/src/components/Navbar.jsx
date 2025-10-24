import React from "react";
import "../navbar.css";
import logo from "../assets/ULIS-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const goToProfile = () => navigate('/profile');
  const goToHome = () => navigate('/home')

  return (
    <nav className="navbar">
      {/* <img className="navbar-logo" src={logo} alt="Logo"/> */}
      <ul className="nav-links">
        <li onClick={goToHome}>Trang chủ</li>
        <li className="dropdown">
          Resources
          <ul className="dropdown-content">
            <li>Articles</li>
            <li>Passages</li>
            <li>Guidelines</li>
          </ul>
        </li>
        <li>Community</li>
        <li onClick={goToProfile}>Profile</li>
      </ul>
    </nav>
  );
}
