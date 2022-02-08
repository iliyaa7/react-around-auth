import React from "react";
import logoPath from "../images/Logo.svg"

function Header() {
  return (
    <header className="header">
      <img src={logoPath} id="logo-image" alt="A photo of the logo" className="header__logo"/>
    </header>
  );
}

export default Header;
