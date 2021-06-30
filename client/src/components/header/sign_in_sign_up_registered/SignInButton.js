import "./signInUpButton.css";
import { useHistory } from "react-router-dom";
import React from 'react';

function SignInButton() {
  let history = useHistory();
  function toSignInPage() {
    history.push("/sign_in_page");
  }
  return (
    <>
      <button
        onClick={toSignInPage}
        className="sign_in_button sign_in_up_button"
      >
        התחבר
      </button>
    </>
  );
}

export default SignInButton;
