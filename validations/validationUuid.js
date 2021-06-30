module.exports = function validationUuid(req, res, next) {
  const uuid = req.body._uuid;
  if (uuid && typeof uuid === "string" && uuid.length > 35 && uuid.length < 40)
    return next();
  else res.status(400).send("לא הצלחנו לאמת את הנתונים שנשלחו");
};
