import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          // onClick={setSignIn(false)}
          className="loginScreen_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          // logo png image taken from : https://www.freepnglogos.com/images/netflix-logo-png-2562.html
          alt="image"
        />

        <button onClick={() => setSignIn(true)} className="signInbtn">
          Sign In
        </button>

        <div className="loginScreen_gradient"></div>

        <div className="loginScreen_body">
          {signIn ? (
            <SignupScreen setSignIn={setSignIn} />
          ) : (
            <>
              <h1>Unlimited movies,tv shows and more.</h1>
              <h2>Watch anywhere, cancel at any time</h2>
              <h3>
                Ready to watch? Enter you email to create or restart your
                membership
              </h3>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
