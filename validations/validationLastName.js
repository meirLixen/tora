module.exports = function validationLastName(req, res, next) {
  const lastName = req.body.lastName;

  if (lastName && typeof lastName === "string" && lastName.length > 1)
    return next();
  else res.status(400).send("שם משפחה לא חוקי");
};
