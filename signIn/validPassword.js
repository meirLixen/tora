const bcrypt = require("bcryptjs");
module.exports = function validPassword(req, res, next) {
  var passwordIsValid = bcrypt.compareSync(
    req.body.password,
    res.locals.user.password
  );
  if (!passwordIsValid) return res.status(404).send("סיסמה שגויה");
  next();
};
