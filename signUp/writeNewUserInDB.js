const db = require("../config/pg");

module.exports = function writeNewUserInDB(req, res, next) {
  const insertnewUser = {
    text: `INSERT INTO users (email, "firstName", "lastName") VALUES($1,$2,$3)`,
    values: [req.body.email, req.body.firstName, req.body.lastName],
  };

  db.any(insertnewUser)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("שגיאה פנימית בשרת");
    });
};
