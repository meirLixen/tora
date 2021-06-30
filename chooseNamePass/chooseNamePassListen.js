const db = require("../config/pg");
const bcrypt = require("bcryptjs");
const verifyToken = require("../jwt/verifyToken");
const validationUsername = require("../validations/validationUsername");
const validationPassword = require("../validations/validationPassword");
const checkIfLinkWasUsed = require("./checkIfLinkWasUsed");

module.exports = function ChooseNamePassListen(app) {
  app.post(
    "/api/choose_name_pass",
    verifyToken,
    validationUsername,
    validationPassword,
    checkIfLinkWasUsed,
    (req, res) => {
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const query = `UPDATE users SET
      username = $mEiRlix7947$${req.body.username}$mEiRlix7947$,
      password = $mEiRlix7947$${hashedPassword}$mEiRlix7947$
      WHERE _uuid = $mEiRlix7947$${res.locals._uuid}$mEiRlix7947$;`;

      db.any(query)
        .then(() => {
          res.status(204).end();
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("שגיאה פנימית בשרת");
        });
    }
  );
};
