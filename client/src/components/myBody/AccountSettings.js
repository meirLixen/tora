import React from 'react';

import "./myBodyCss/AccountSettings.css";
function AccountSettings() {
  let arrayAccountSettings = {
    firstName: "מאיר",
    lastName: "ליקסנברג",
    mail: "m0527685598@gmail.com",
    userName: "מאיר3737",
    password: "373737",
  };

  return (
    <div className="account_settings">
      <h1>הגדרות חשבון</h1>
      <form>
        <div className="label_and_input">
          <label htmlFor="firstName">שם פרטי</label>
          <input
            name="firstName"
            defaultValue={arrayAccountSettings.firstName}
          />
        </div>
        <br />

        <div className="label_and_input">
          <label htmlFor="lastName">שם משפחה</label>
          <input name="lastName" defaultValue={arrayAccountSettings.lastName} />
        </div>
        <br />

        <div className="label_and_input">
          <label htmlFor="mail">מייל</label>
          <input name="mail" defaultValue={arrayAccountSettings.mail} />
        </div>
        <br />

        <div className="label_and_input">
          <label htmlFor="userName">שם משתמש</label>
          <input name="userName" defaultValue={arrayAccountSettings.userName} />
        </div>
        <br />

        <div className="label_and_input">
          <label htmlFor="password">סיסמה</label>
          <input name="password" defaultValue={arrayAccountSettings.password} />
        </div>
        <div className="update_button">
          <button type="button">לעדכן</button>
        </div>
      </form>
    </div>
  );
}
export default AccountSettings;
