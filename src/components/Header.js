import React from "react";
import logoPath from "../images/Logo.svg";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img src={logoPath} id="logo-image" alt="Our logo" className="header__logo"/>
      { props.isLoggedIn && <p className="header__user-email">{props.userEmail}</p> }
      { props.isLoggedIn && <button onClick={props.handleLogOut} className="header__button header__button_logged-in">Log out</button> }
      { props.buttonTitle && <Link to={props.buttonPath}><button type="button" className="header__button">{props.buttonTitle}</button></Link>
       }
    </header>
  );
}

export default Header;
