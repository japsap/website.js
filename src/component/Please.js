import React from 'react'

import './style.css'

const Please = (props) => {
    const { email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError,
        passwordError} = props

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
                    type="text"
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
                          <p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign in </span> </p>
                        </>
                    ) : (
                        <>
                          <button onClick={handleSignup}>Sign up</button>
                          <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign up </span> </p>
                        </>    
                       )}
                </div>
            </div>

        </section>
    )
}

export default Please
