const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");
// const validationPostTitle = require("../validations/validationPostTitle");
// const validationPostBody = require("../validations/validationPostBody");

module.exports = function addComment(app) {
  app.post(
    "/api/add_comment",
    verifyToken,
    // validationPostTitle,
    // validationPostBody,

    (req, res) => {
      console.log(req.body);
      const insertNewComment = {
        text: `INSERT INTO comments (title, body, author, "toToraOrComment") VALUES($1,$2,$3,$4)`,
        values: [
          req.body.title,
          req.body.body,
          res.locals._uuid,
          req.headers["uuid-of-tora"],
        ],
      };

      db.any(insertNewComment)
        .then(() => {
          res.status(204).end();
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("שגיאה פנימית בשרת");
        });

      //   res.status(204).send({ token: res.locals.token });
    }
  );
};
