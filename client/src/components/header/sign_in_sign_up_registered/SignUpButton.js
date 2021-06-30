import "./signInUpButton.css";
import { useHistory } from "react-router-dom";
import React  from 'react';

function SignUpButton() {
  let history = useHistory();
  function toSignUpPage() {
    history.push("/sign_up_page");
  }
  return (
    <>
      <button
        className="sign_un_button sign_in_up_button"
        onClick={toSignUpPage}
      >
        הירשם
      </button>
    </>
  );
}

export default SignUpButton;
