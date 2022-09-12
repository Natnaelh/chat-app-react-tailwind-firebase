import React from "react";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
  signinButton: `text-lg`,
};

function Signin() {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className={style.wrapper}>
      <GoogleButton className={style.signinButton} onClick={handleLogin} />
    </div>
  );
}

export default Signin;
