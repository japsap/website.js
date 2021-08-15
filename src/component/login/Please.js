import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import AfterLoginHome from "../home/AfterLoginHome";

import "./style.css";

const Please = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  

  const [name, setName] = useState("");
  const [ema, setEma] = useState("");
  const [url, setUrl] = useState("");

  const fuckOff = "fuck-off"

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEma(response.profileObj.ema);
    setUrl(response.profileObj.url);
    console.log(response)
  }

  const hidePass = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          autoCapitalize
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p class="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          id="myInput"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn-login" onClick={handleLogin}>
                Sign in
              </button>
              <p>
                Dont have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>
                  {" "}
                  Sign in{" "}
                </span>{" "}
              </p>
            </>
          ) : (
            <>
              <button className="btn-login" onClick={handleSignup}>
                Sign up
              </button>
              <p>
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>
                  {" "}
                  Sign up{" "}
                </span>{" "}
              </p>
            </>
          )}
        </div>
        <GoogleLogin
          clientId="502967711253-87k1blo1reevvkqjbshjdpghke9c3jfi.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </section>
  );
};

export default Please;
