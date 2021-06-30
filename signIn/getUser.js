const db = require("../config/pg");
module.exports = function getUser(req, res, next) {
  
  const query = `
  SELECT * FROM users WHERE username=$mEiRlix7947$${req.body.username}$mEiRlix7947$;
  `;
  const query2 = `
  SELECT      users.email,
              users."firstName",
              users._uuid, 
              users."lastName",
              users.username,
              users.password,
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
  WHERE       users.username = $mEiRlix7947$${req.body.username}$mEiRlix7947$
  GROUP BY    email,
              "firstName",
              "lastName",
              username,
              password,
              users._uuid
  ;`;
  db.any(query2)
    .then((v) => {
      if (v[0]) {
        res.locals.user = v[0];
        next();
      } else {
        res.status(404).send("לא נמצא משתמש עם השם שסופק");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("שגיאה פנימית בשרת");
    });
};
