import React from "react";
import logoPath from "../images/Logo.svg"

function Header(props) {
  return (
    <header className="header">
      <img src={logoPath} id="logo-image" alt="Our logo" className="header__logo"/>
      { props.isloggedIn && <p className="header__user-email">{props.userEmail}</p> }
      { props.isloggedIn && <button className="header__button header__button_logged-in">Log out</button> }
      { props.buttonTitle && <button type="button" className="header__button">{props.buttonTitle}</button> }
    </header>
  );
}

export default Header;
