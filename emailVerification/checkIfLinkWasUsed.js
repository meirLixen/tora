const db = require("../config/pg");
module.exports = function checkIfLinkWasUsed(req, res, next) {
  const query = `SELECT * FROM users WHERE _uuid=$mEiRlix7947$${res.locals._uuid}$mEiRlix7947$;`;
  db.any(query)
    .then((v) => {
      if (v[0].username && v[0].password)
        return res.status(403).send("לא ניתן להשתמש בקישור זה פעם נוספת");
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("שגיאה פנימית בשרת");
    });
};
