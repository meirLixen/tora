var jwt = require("jsonwebtoken");
module.exports = function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];

  if (!token)
    return res.status(403).send({ auth: false, message: "לא סופק אסימון" });

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    // if everything good, save to request for use in other routes
    res.locals._uuid = decoded._uuid;
    next();
  });
};

// function checkManagementPermission(_uuid) {
//   const query = `SELECT * FROM administrators WHERE _uuid='${_uuid}';`;

//   return pool
//     .connect()
//     .then((client) => {
//       return client
//         .query(query)
//         .then((v) => {
//           client.release();
//           if (v.rows[0]) {
//             return "ok";
//             // next();
//           } else {
//             // return res.send("אין לך הרשאה לגשת לאזור זה באתר");
//             return "not authorized";
//           }
//         })
//         .catch((err) => {
//           client.release();
//           console.error(err);
//           return err;
//         });
//     })
//     .catch((err) => err);
// }
