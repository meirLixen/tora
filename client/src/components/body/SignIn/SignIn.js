import React from "react";
import { useContext } from "react";
import context from "../../../reactContext";

import "./SignIn.css";
import { useHistory } from "react-router-dom";
import signIn from "../../../services/signIn";
import cookies from "../../../cookies/cookies";

function SignInPage() {
  const usernameAndPassword = { username: "", password: "" };
  const globalState = useContext(context);

  const history = useHistory();
  const toPersonalArea = () => {
    signIn(usernameAndPassword)
      .then((response) => {
        response.text().then((bodyOfResponse) => {
          if (response.status === 200) {
            globalState.setUserInformation(JSON.parse(`${bodyOfResponse}`).user);
            cookies.setCookie(
              "_token_to_tora",
              JSON.parse(`${bodyOfResponse}`).token
            );
            history.push("/my_torahs");
          } else {
            alert(bodyOfResponse);
            console.error(
              `status: ${response.status} message: ${bodyOfResponse}`
            );
          }
        });
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };
  return (
    <div className="sign_in_page">
      <div>
        <h2 dir="rtl">התחבר</h2>
        <form dir="rtl">
          <div>
            <label htmlFor="username" className="sr-only"></label>
            <input
              id="username"
              type="text"
              required
              minLength="4"
              maxLength="30"
              placeholder="שם משתמש"
              onChange={(e) => {
                usernameAndPassword.username = e.target.value;
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only"></label>
            <input
              id="password"

              type="password"
              required
              minLength="8"
              maxLength="30"
              placeholder="סיסמה"
              onChange={(e) => {
                usernameAndPassword.password = e.target.value;
              }}
            />
          </div>
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            toPersonalArea()
          }}>
            שלח
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignInPage;
