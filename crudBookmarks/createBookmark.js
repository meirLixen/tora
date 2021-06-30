const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");

module.exports = function addBookmark(app) {
  app.post(
    "/api/add_bookmark",
    verifyToken,

    (req, res) => {
      const insertNewBookmark = {
        text: `INSERT INTO  bookmarks (label, "toTora", author) 
               VALUES       ($1,$2,$3) 
               RETURNING    _uuid AS "bookmarkUuid", label AS "bookmarkLabel", "toTora" AS "bookmarkToTora"
        `,
        values: [req.body.bookmarkName, req.body.toraUuid, res.locals._uuid],
      };

      db.any(insertNewBookmark)
        .then((v) => {
          res.status(200).send(v);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("שגיאה פנימית בשרת");
        });

    }
  );
};
