const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");

module.exports = function getUser(app) {
  app.get(
    "/api/get_user",
    verifyToken,

    (req, res) => {
      const query = `
        SELECT      users.email,
                    users."firstName",
                    users."lastName",
                    users.username,
                    json_agg(
                      json_build_object(
                           'bookmarkUuid',  bookmarks._uuid,
                           'bookmarkLabel',   bookmarks.label,
                           'bookmarkToTora',  bookmarks."toTora"
                           )
                      ) AS "bookmarksAraay"
        FROM        users 
        LEFT JOIN   bookmarks
        ON          users._uuid = bookmarks.author 
        WHERE       users._uuid = $mEiRlix7947$${res.locals._uuid}$mEiRlix7947$
        GROUP BY    email,
                    "firstName",
                    "lastName",
                    username
        ;`;
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
