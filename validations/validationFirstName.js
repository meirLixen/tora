module.exports = function validationFirstName(req, res, next) {
  const firstName = req.body.firstName;

  if (firstName && typeof firstName === "string" && firstName.length > 1)
    return next();
  else res.status(400).send("שם פרטי לא חוקי");
};
