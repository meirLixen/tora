
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ChooseUsernameHtml from "./ChooseUsernameHtml";
import CheckLinkSentToEmail from "../../../services/CheckLinkSentToEmail";
import sendUsernameAndPassword from "../../../services/sendUsernameAndPassword";
function ChooseUsername() {
  const usernameAndPassword = { username: "", password: "" };
  var locationHref = window.location.href;
  var searchUuid = locationHref.search("=");
  var token = locationHref.slice(searchUuid + 1);

  const [check, setCheck] = useState("check");
  const history = useHistory();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonSendRef = useRef(null);

  useEffect(() => {
    CheckLinkSentToEmail(token)
      .then((response) => {
        if (response.status === 204) {
          setCheck("OK");
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function inputUsername() {
    usernameAndPassword.username = usernameRef.current.value;
    if (
      usernameAndPassword.username.length < 4 ||
      usernameAndPassword.username.length > 15
    ) {
      usernameRef.current.style.outline = "solid red 2px";
    } else {
      usernameRef.current.style.outline = "none";
    }
  }

  function inputPassword() {
    usernameAndPassword.password = passwordRef.current.value;
    if (
      usernameAndPassword.password.length < 8 ||
      usernameAndPassword.password.length > 20
    ) {
      passwordRef.current.style.outline = "solid red 2px";
    } else {
      passwordRef.current.style.outline = "none";
    }
  }

  function clickOnButtonSend() {
    if (
      usernameAndPassword.username &&
      usernameAndPassword.password &&
      usernameRef.current.style.outline === "none" &&
      passwordRef.current.style.outline === "none"
    ) {
      sendUsernameAndPassword(token, usernameAndPassword)
        .then((response) => {
          if (response.status === 204) {
            history.push("/sign_in_page");
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
      alert("יש למלא את הטופס בצורה תקינה");
    }
  }

  return (
    <>
      <ChooseUsernameHtml
        check={check}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        inputUsername={inputUsername}
        inputPassword={inputPassword}
        buttonSendRef={buttonSendRef}
        clickOnButtonSend={clickOnButtonSend}
      />
    </>
  );
}
export default ChooseUsername;
