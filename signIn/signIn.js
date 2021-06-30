const validationUsername = require("../validations/validationUsername");
const validationPassword = require("../validations/validationPassword");
const getUser = require("./getUser");
const createToken = require("./createToken");
const validPassword = require("./validPassword");
module.exports = function signIn(app) {
  app.post(
    "/api/sign_in",
    validationUsername,
    validationPassword,
    getUser,
    validPassword,
    createToken,
    (req, res) => {
      let user = {
       
      };
      user = res.locals.user;
      delete user.password
      console.log(user);
      res.status(200).send({ token: res.locals.token, user });
    }
  );
};
