import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function Login(props) {
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
    props.handleSignin({
      email,
      password,
    });
  }
  return (
    <>
      <Header buttonTitle="Sign up" buttonPath="/register"/>
      <div className="auth__form-containter">
        <form action="#" className="auth__form" name="login-form" onSubmit={ handleSubmit }>
          <h1 className="auth__heading">Log in</h1>
          <input className="auth__input" onChange={handleEmailCHange} placeholder="Email" value={email || ""} type="email" minLength="2" maxLength="40" required></input>
          <input className="auth__input" onChange={handlePasswordCHange} placeholder="Password" value={password|| ""} type="password" minLength="2" maxLength="40" required></input>
          <button type="submit" className="auth__submit-button">Log in</button>
          <Link to="/register"><button type="button" className="auth__redirect-button">Not a member yet? Sign up here!</button></Link>
        </form>
      </div>
    </>
  );
}

export default Login;
