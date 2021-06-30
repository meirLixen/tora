const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");

module.exports = function deleteTora(app) {
  app.delete(
    "/api/delete_tora",
    verifyToken,

    (req, res) => {
        console.log(req.body);
      const query = `DELETE FROM toras 
      WHERE _uuid = $mEiRlix7947$${req.body.toraUuid}$mEiRlix7947$;`;

      db.any(query)
        .then((v) => {
          console.log(v);
          res.status(204).end();
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("שגיאה פנימית בשרת");
        });
    }
  );
};
