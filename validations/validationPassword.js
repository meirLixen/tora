module.exports = function validationPassword(req, res, next) {
  const password = req.body.password;
  if (password && typeof password === "string" && password.length > 7)
    return next();
  else res.status(400).send("סיסמה לא חוקית");
};
