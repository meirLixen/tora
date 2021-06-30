module.exports = function validationEmail(req, res, next) {
  const email = req.body.email;
  console.log(email);
  const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    email &&
    typeof email === "string" &&
    validEmail.test(String(email).toLowerCase())
  )
    return next();
  else res.status(400).send("כתובת מייל לא חוקית");
};
