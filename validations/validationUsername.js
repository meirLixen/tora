module.exports = function validationUsername(req, res, next) {
  const username = req.body.username;

  if (username && typeof username === "string" && username.length > 3)
    return next();
  else res.status(400).send("שם משתמש לא חוקי");
};
