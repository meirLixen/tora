const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");
const validationPostTitle = require("../validations/validationPostTitle");
const validationPostBody = require("../validations/validationPostBody");

module.exports = function addTora(app) {
  app.post(
    "/api/add_tora",
    verifyToken,
    validationPostTitle,
    validationPostBody,

    (req, res) => {
      const insertNewTora = {
        text: `INSERT INTO toras (title, body, author, status) VALUES($1,$2,$3,$4)`,
        values: [req.body.title, req.body.body, res.locals._uuid, req.body.status],
      };

      db.any(insertNewTora)
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
