const validationEmail = require("../validations/validationEmail");
const validationFirstName = require("../validations/validationFirstName");
const validationLastName = require("../validations/validationLastName");
const checkEmailInDB = require("./checkEmailInDB");
const writeNewUserInDB = require("./writeNewUserInDB");
const transporter = require("../config/sendMail");
const getUserFromDB = require("./getUserFromDB");
const createToken = require("./createToken");
module.exports = function signUp(app) {
  app.post(
    "/api/sign_up",
    validationEmail,
    validationFirstName,
    validationLastName,
    checkEmailInDB,
    writeNewUserInDB,
    getUserFromDB,
    createToken,
    (req, res) => {
      const user = res.locals.user;
      const mailOptions = {
        from: "m0527685598@gmail.com",
        to: user.email,
        subject: "אתר דבר תורה - אימות כתובת מייל",
        html: `
          <div dir="rtl" class="main" style="padding: 21px">
          <div class="border">
            <div class="hi" style="font-weight: 600">שלום ${user.firstName}</div>
            <div class="thanks" style="margin-top: 2px">
              תודה שנרשמת לאתר 'דבר תורה'!
            </div>
            <div class="approval" style="margin-top: 20px">
              יש לאשר את כתובת הדוא"ל עמה נרשמת לאתר
            </div>
            <a href="${process.env.URL}${process.env.PORT_OF_CLIENT || ""}/choose_username?token=${user.token}" target="_blank">
              <button
                style="
                  margin-top: 21px;
                  width: 100px;
                  height: 35px;
                  background-color: chartreuse;
                  border: none;
                "
              >
                אישור
              </button>
            </a>
          </div>
        </div>
            `,
      };

      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(204).end();
        })
        .catch((err) => {
          console.error(`err in signUp ${err}`);
          res.status(500).send("שגיאה פנימית בשרת");
        });
    }
  );
};
