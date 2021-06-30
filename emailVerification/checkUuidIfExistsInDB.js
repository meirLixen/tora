const db = require("../config/pg");

module.exports = function checkUuidIfExistsInDB(req, res, next) {
  const query = `SELECT exists (SELECT 1 FROM users WHERE _uuid = $mEiRlix7947$${res.locals._uuid}$mEiRlix7947$);`;
  db.any(query)
    .then((v) => {
      if (!v[0].exists)
        return res.status(404).send("לא מצאנו נתונים עם הערך שנשלח");
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("שגיאה");
    });
};
