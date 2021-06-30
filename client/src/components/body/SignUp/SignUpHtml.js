import React from 'react';

import "./SignUp.css";
function SignUpHtml(props) {
  return (
    <div className="sign_up_page" dir="ltr">
      <div className="sign_up" dir="rtl">
        <h1>רישום</h1>
        <form>
          <div className="inputs">
            <input
              ref={props.firstNameRef}
              onInput={() => props.inputFirstName()}
              type="text"
              placeholder="שם פרטי"
            />

            <br />
            <input
              onInput={() => props.inputLastName()}
              type="text"
              placeholder="שם משפחה"
              ref={props.lastNameRef}
            />

            <br />

            <input
              onInput={() => props.inputEmail()}
              type="text"
              placeholder="אימייל"
              ref={props.emailRef}
            />
          </div>
          <div className="terms_of_Use">
            <div className="title_of_terms_of_Use">
              בהרשמה לאתר הינך מסכים לתנאי השימוש
            </div>

            <div ref={props.agreeOrDisagree} className="agree_or_disagree">
              <div className="agree">
                <label htmlFor="agree">מסכים</label>
                <input
                  type="radio"
                  name="agree"
                  id="agree"
                  ref={props.agreeRef}
                  onInput={() => props.inputAgree()}
                />
              </div>
              <div className="disagree">
                <label htmlFor="disagree">לא מסכים</label>
                <input type="radio" name="agree" id="disagree" />
              </div>
            </div>
          </div>
          <button
            ref={props.buttonRef}
            type="button"
            onClick={() => props.clickOnRegisterButton()}
            className="register_button"
          >
            הירשם
          </button>
        </form>
      </div>
      <div className="Why_sign_up" dir="rtl">
        <button onClick={() => props.toHomePage()}>חזרה</button>
        <div className="text">
          <h1>למה להירשם?</h1>
          <span>אין צורך להירשם כדי לקרוא תכנים באתר </span>
          <span>עם זאת ההרשמה לאתר הינה תהליך מהיר </span>
          <span>ואחריה תוכל להוסיף תגובות לדברי תורה של אחרים </span>
          <span>כמו כן תוכל לעקוב אחר דברי תורה אצלך באזור האישי </span>
          <span>גם להעלות דברי תורה לאתר תוכל אחר ההרשמה </span>
          <span>
            (עם זאת ע"מ לפרסם את דברי התורה שלך באתר עליך לעבור תהליך קצר נוסף)
          </span>
        </div>
      </div>
    </div>
  );
}
export default SignUpHtml;
