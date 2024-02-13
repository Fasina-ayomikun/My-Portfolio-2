import React from "react";
import { NavLink } from "react-router-dom";
import { useAppProvider } from "../store/context";
import image from "../images/moon1.png";
import image2 from "../images/moon2.png";
function Navbar() {
  const { lightmode, openLightmode, closeLightmode, openSidebar } =
    useAppProvider();
  return (
    <div className="nav">
      <div className="nav-container">
        {lightmode ? (
          <img
            src={image2}
            alt="Darkmode"
            className="darkmode-img"
            onClick={closeLightmode}
          />
        ) : (
          <img
            src={image}
            alt="Darkmode"
            className="darkmode-img"
            onClick={openLightmode}
          />
        )}
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/portfolio" activeclassname="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="toggle-btn" onClick={openSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
