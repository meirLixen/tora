const db = require("../config/pg");
const checkUuidIfExistsInDB = require("./checkUuidIfExistsInDB");
const checkIfLinkWasUsed = require("./checkIfLinkWasUsed");
const verifyToken = require("../jwt/verifyToken");
module.exports = function emailVerification(app) {
  app.post(
    "/api/email_check",
    verifyToken,
    checkUuidIfExistsInDB,
    checkIfLinkWasUsed,
    (req, res) => {
      const query = `UPDATE users SET
      "emailVerified" = true
      WHERE _uuid = $mEiRlix7947$${res.locals._uuid}$mEiRlix7947$;`;
      db.any(query)
        .then(() => {
          res.status(204).end();
        })
        .catch(console.error);
    }
  );
};
