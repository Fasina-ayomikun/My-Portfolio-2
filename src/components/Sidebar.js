import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppProvider } from "../context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppProvider();
  return (
    <aside className={`${isSidebarOpen ? "sidebar open-sidebar" : "sidebar"}`}>
      <div className='close-btn' onClick={closeSidebar}>
        <div></div>
      </div>
      <ul className='sidebar-links'>
        <li className='sidebar-link '>
          <NavLink to='/' onClick={closeSidebar} activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li className='sidebar-link '>
          <NavLink to='/about' onClick={closeSidebar} activeclassname='active'>
            About
          </NavLink>
        </li>
        <li className=' sidebar-link '>
          <NavLink
            to='/portfolio'
            onClick={closeSidebar}
            activeclassname='active'
          >
            Portfolio
          </NavLink>
        </li>
        <li className='sidebar-link'>
          <NavLink
            to='/contact'
            onClick={closeSidebar}
            activeclassname='active'
          >
            Contact
          </NavLink>
        </li>

        <div className='social-icons'>
          <a href='https://github.com/Fasina-ayomikun' target='blank'>
            <FaGithubSquare />
          </a>
          <a
            href='https://www.linkedin.com/in/ayomikun-fasina-b791ab225'
            target='blank'
          >
            <FaLinkedin />
          </a>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
