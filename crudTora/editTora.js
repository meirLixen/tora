const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");
const validationPostTitle = require("../validations/validationPostTitle");
const validationPostBody = require("../validations/validationPostBody");

module.exports = function addTora(app) {
  app.put(
    "/api/edit_tora",
    verifyToken,
    validationPostTitle,
    validationPostBody,

    (req, res) => {
      const query = `UPDATE toras SET
      title = $mEiRlix7947$${req.body.title}$mEiRlix7947$,
      body = $mEiRlix7947$${req.body.body}$mEiRlix7947$,
      status = $mEiRlix7947$${req.body.status}$mEiRlix7947$
      WHERE _uuid = $mEiRlix7947$${req.body.oldTora.toraUuid}$mEiRlix7947$;`;

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
