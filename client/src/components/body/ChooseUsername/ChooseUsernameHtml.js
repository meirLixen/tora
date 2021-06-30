import "./ChooseUsername.css";
import React from 'react';

function ChooseUsernameHtml(props) {
  return (
    <div>
      {props.check === "check" ? (
        <div className="please_wait">please wait..</div>
      ) : (
        <div className="choose_username">
          <h1 dir="rtl">נרשמת בהצלחה! </h1>
          <div>
            <h3>אנא בחר שם משתמש וסיסמה </h3>
            <form dir="rtl">
              <input
                ref={props.usernameRef}
                onInput={() => props.inputUsername()}
                type="text"
                placeholder="שם משתמש"
              />
              <br />
              <input
                ref={props.passwordRef}
                onInput={() => props.inputPassword()}
                type="password"
                placeholder="סיסמה"
              />
              <br />
              <button
                ref={props.buttonSendRef}
                onClick={props.clickOnButtonSend}
                type="button"
              >
                שלח
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ChooseUsernameHtml;
