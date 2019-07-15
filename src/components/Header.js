import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="Nav-bar">
          <li className="nav-item-first"><a href="#contact">MENU</a></li>
          <li className="nav-item-first"><a href="#about">SOME TEXT</a></li>
          <li className="nav-item-first"><a href="#works">ANOTHER ITEM</a></li>
          <li className="nav-item-first"><a href="#service">ONE MORE</a></li>
          <li className="nav-item-first nav-item-first-last"><a href="#home">AND LAST ONE</a></li>
        </ul>
        <ul className="Nav-bar">
          <li className="nav-item-left"><a href="#DEMOSITE"><span className="bigger">DEMO</span>SITE</a></li>
          <li className="nav-item"><a href="#contact">CONTACT</a></li>
          <li className="nav-item"><a href="#about">ABOUT ME</a></li>
          <li className="nav-item dropdown"><a href="#works">WORKS</a>
            <ul className="submenu">
              <li className="sumbenu-item"><a href="#ALL">ALL</a></li>
              <li className="sumbenu-item"><a href="#ALL">GRAPHIC</a></li>
              <li className="sumbenu-item"><a href="#ALL">DESIGN</a></li>
              <li className="sumbenu-item"><a href="#ALL">LOGO</a></li>
              <li className="sumbenu-item"><a href="#ALL">ALL</a></li>
            </ul>
          </li>
          <li className="nav-item"><a href="#service">SERVICE</a></li>
          <li className="nav-item"><a href="#home">HOME</a></li>
        </ul>
      </div>
    );
  }
}