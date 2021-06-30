
const db = require("../config/pg");
const verifyToken = require("../jwt/verifyToken");

module.exports = function getMyDrafts(app) {
  app.get("/api/get_my_drafts", verifyToken, (req, res) => {
    console.log(454545 );
    const query = `
    SELECT      toras.title,  
                toras.time, 
                toras._uuid, 
                COUNT(comments)
    FROM        toras 
    LEFT JOIN   comments 
    ON          comments."toToraOrComment" = toras._uuid
    WHERE       toras.author=$mEiRlix7947$${res.locals._uuid}$mEiRlix7947$
    AND         toras.status='private'
    GROUP BY    toras.title,  
                toras.time, 
                toras._uuid 
   `;
    db.any(query)
      .then((v) => {
        res.status(200).send(v);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("שגיאה פנימית בשרת");
      });

    //   res.status(204).send({ token: res.locals.token });
  });
};
