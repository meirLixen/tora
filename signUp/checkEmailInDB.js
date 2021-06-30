const db = require("../config/pg");
module.exports = function checkEmailInDB(req, res, next) {

  const query = `SELECT exists (SELECT 1 FROM users WHERE email = $mEiRlix7947$${req.body.email}$mEiRlix7947$);`;
  db.any(query)
    .then((v) => {
      if (v[0].exists)
        return res.status(400).send("כבר קיים משתמש עם כתובת מייל זו");
      next();
    })
    .catch((err) => {
      console.error(`err in checkEmailInDB ${err}`);
      res.status(500).send("שגיאה פנימית בשרת");
    });
};
