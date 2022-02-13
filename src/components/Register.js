import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailCHange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordCHange(e) {
    setPassword(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister({
      email,
      password,
    });
  }
  return (
    <>
      <Header buttonTitle="Log in" buttonPath="/signin"/>
      <div className="auth__form-containter">
        <form action="#" className="auth__form" name="login-form" onSubmit={ handleSubmit }>
          <h1 className="auth__heading">Sign up</h1>
          <input className="auth__input" onChange={handleEmailCHange} placeholder="Email" value={email || ""} type="email" required></input>
          <input className="auth__input" onChange={handlePasswordCHange} placeholder="Password" value={password|| ""} type="password" minLength="4" maxLength="40" required></input>
          <button type="submit" className="auth__submit-button">Sign up</button>
          <Link to="/signin"><button type="button" className="auth__redirect-button">Already a member? Log in here!</button></Link>
        </form>
      </div>
    </>
  );
}

export default Register;