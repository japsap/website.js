import React from "react";

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


        <div onClick={hidePass} className="icon">
        <i class="fas fa-eye-slash"></i>
        </div>
        <div onClick={hidePass} className="icon">
          <i class="fas fa-eye"></i>
        </div>

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
              <button onClick={handleLogin}>Sign in</button>
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
              <button onClick={handleSignup}>Sign up</button>
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
      </div>
    </section>
  );
};

export default Please;
