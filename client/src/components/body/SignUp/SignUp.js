import React from 'react';

import { useHistory } from "react-router-dom";
import SignUpPageHtml from "./SignUpHtml";
import { useRef } from "react";
import sendPullNameAndEmail from "../../../services/sendPullNameAndEmail";
function SignUpPage() {
  const history = useHistory();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const buttonRef = useRef(null);
  const agreeRef = useRef(null);
  const agreeOrDisagree = useRef(null);

  const fullNameAndEmail = { firstName: "", lastName: "", email: "" };

  const toHomePage = () => {
    history.push("/");
  };

  function inputFirstName() {
    fullNameAndEmail.firstName = firstNameRef.current.value;
    if (
      fullNameAndEmail.firstName.length < 2 ||
      fullNameAndEmail.firstName.length > 15
    ) {
      firstNameRef.current.style.outline = "solid red 2px";
    } else {
      firstNameRef.current.style.outline = "none";
    }
  }

  function inputLastName() {
    fullNameAndEmail.lastName = lastNameRef.current.value;
    if (
      fullNameAndEmail.lastName.length < 2 ||
      fullNameAndEmail.lastName.length > 20
    ) {
      lastNameRef.current.style.outline = "solid red 2px";
    } else {
      lastNameRef.current.style.outline = "none";
    }
  }

  function inputEmail() {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    fullNameAndEmail.email = emailRef.current.value;
    if (!validEmail.test(String(fullNameAndEmail.email).toLowerCase())) {
      emailRef.current.style.outline = "solid red 2px";
    } else {
      emailRef.current.style.outline = "none";
    }
  }
  const inputAgree = () => {
    if (agreeRef.current.checked) {
      agreeOrDisagree.current.style.outline = "none";
    }
  };
  const clickOnRegisterButton = () => {
    if (
      fullNameAndEmail.firstName &&
      fullNameAndEmail.lastName &&
      fullNameAndEmail.email &&
      firstNameRef.current.style.outline === "none" &&
      lastNameRef.current.style.outline === "none" &&
      emailRef.current.style.outline === "none" &&
      agreeRef.current.checked
    ) {
      sendPullNameAndEmail(fullNameAndEmail)
        .then((response) => {
          if (response.status === 204) {
            history.push("/after_initial_registration");
          } else {
            response.text().then((message) => {
              alert(message);
              console.error(`status: ${response.status} message: ${message}`);
            });
          }
        })
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    } else {
      if (!agreeRef.current.checked) {
        agreeOrDisagree.current.style.outline = "solid red 2px";
      } else {
        alert("יש למלא את הטופס בצורה תקינה");
      }
    }
  };

  return (
    <>
      <SignUpPageHtml
        toHomePage={toHomePage}
        clickOnRegisterButton={clickOnRegisterButton}
        inputFirstName={inputFirstName}
        inputLastName={inputLastName}
        inputEmail={inputEmail}
        inputAgree={inputAgree}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        buttonRef={buttonRef}
        agreeRef={agreeRef}
        agreeOrDisagree={agreeOrDisagree}
      />
    </>
  );
}
export default SignUpPage;
