import React from "react";
import { useState } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import '../styles/menuCss.css'

function NavMenu({menuItems}){
  return (
        <nav className="navbar">
          <h1 className="navbar-logo">SEMEQ</h1>
            <ul className="navbar-menu">
            {menuItems.map((item) => (
                <li key={item.id} className="nav-bar-item">
                    <a href={item.link} className="navbar-link">{item.label}</a>
          </li>
        ))}
            </ul>
        </nav>
  );
};


export default NavMenu;