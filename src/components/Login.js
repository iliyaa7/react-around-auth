import React from "react";
import Header from "./Header";

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailCHange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordCHange(e) {
    setPassword(e.target.value)
  }

  // dont forget to change the props.

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      email,
      password,
    });
  }
  return (
    <>
    <div className="body">
      <div className="page">
        <Header buttonTitle="Sign up"/>
        <div className="auth__form-containter">
          <form action="#" className="auth__form" name="login-form" onSubmit={ handleSubmit }>
            <h1 className="auth__heading">Log in</h1>
            <input className="auth__input" onChange={handleEmailCHange} placeholder="Email" value={email || ""} type="email" minLength="2" maxLength="40" required></input>
            <input className="auth__input" onChange={handlePasswordCHange} placeholder="Password" value={password|| ""} type="password" minLength="2" maxLength="40" required></input>
            <button type="submit" className="auth__submit-button">Log in</button>
            <button type="button" className="auth__redirect-button">Not a member yet? Sign up here!</button>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default Login;
