import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="custom-navbar fixed-top">
        <div className="container">
          <div className="nav-content">

            <div className="logo">
              <div className="logo-img">
                <img src={logo} alt="logo" />
              </div>

              <div className="logo-text">
                <h5>عدسة</h5>
                <span>عالم التصوير الفوتوغرافي</span>
              </div>
            </div>

            <button
              className="menu-btn"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <i className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"}`}></i>
            </button>

            <ul className={openMenu ? "menu active-menu" : "menu"}>
              <li>
                <NavLink to="/" end onClick={() => setOpenMenu(false)}>
                  الرئيسية
                </NavLink>
              </li>

              <li>
                <NavLink to="/Blog" onClick={() => setOpenMenu(false)}>
                  المدونة
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={() => setOpenMenu(false)}>
                  من نحن
                </NavLink>
              </li>
            </ul>

            <div className="actions">
              <i className="fa-solid fa-magnifying-glass"></i>

              <NavLink to={"/Blog"}>
                <button>ابدأ القراءه</button>
              </NavLink>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}