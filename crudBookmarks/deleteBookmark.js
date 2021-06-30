const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");

module.exports = function deleteBookmark(app) {
  app.delete(
    "/api/delete_bookmark",
    verifyToken,

    (req, res) => {
      console.log(req.body);
      const query = `DELETE FROM  bookmarks 
                     WHERE        _uuid = $mEiRlix7947$${req.body.bookmarkUuid}$mEiRlix7947$;`;

      db.any(query)
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
