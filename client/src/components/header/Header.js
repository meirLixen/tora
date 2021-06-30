import React from "react";
import SignUpButton from "./sign_in_sign_up_registered/SignUpButton";
import SignInButton from "./sign_in_sign_up_registered/SignInButton";
import HebrewDate from "./hebrewDate/HebrewDate";
import SearchTheSite from "./Search/SearchTheSite";
import Logo from "./Logo/Logo";
import RegisteredUserIcon from "./sign_in_sign_up_registered/RegisteredUserIcon";
import "./Header.css";

import { useContext } from "react";
import context from "../../reactContext";

function Header() {
  const globalState = useContext(context);

  return (
    <>
      {globalState.userInformation ? (
        <RegisteredUserIcon
          firstNameOfUser={globalState.userInformation.firstName}
        />
      ) : (
        <>
          <SignUpButton />
          <SignInButton />
        </>
      )}

      <HebrewDate />
      <SearchTheSite />
      <Logo />
    </>
  );
}

export default Header;
