const db = require("../config/pg");

module.exports = function getUserFromDB(req, res, next) {
  const query = `SELECT * FROM users WHERE email=$mEiRlix7947$${req.body.email}$mEiRlix7947$;`;
  db.any(query)
    .then((user) => {
      user = user[0];
      res.locals.user = user;
      next();
    })
    .catch((err) => {
      console.error(`err in getUserFromDB ${err}`);
      res.status(500).send("שגיאה פנימית בשרת");
    });
};
