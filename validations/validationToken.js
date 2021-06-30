module.exports = function validationToken(req, res, next) {
  const token = req.body.lastName;

  if (token && typeof token === "string" && token.length < 250) return next();
  else res.status(400).send("אסימון לא חוקי");
};
