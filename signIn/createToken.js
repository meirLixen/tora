const jwt = require("jsonwebtoken");
module.exports = function createToken(req, res, next) {
  const user = res.locals.user;
  const token = jwt.sign({ _uuid: user._uuid }, process.env.JWT_SECRET, {
    expiresIn: 3000000000, // expires in 30 days
  });
  res.locals.token = token;
  next();
};
