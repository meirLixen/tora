const db = require("../config/pg");
const verifyToken = require("../jwt/verifyToken");

module.exports = function getMyToras(app) {
    app.get("/api/get_my_toras", verifyToken, (req, res) => {

        const query = `
    SELECT      toras.title,  
                toras.time, 
                toras._uuid, 
                 COUNT(comments)
    FROM        toras 
    LEFT JOIN   comments 
    ON          comments."toToraOrComment" = toras._uuid
    WHERE       toras.author=$mEiRlix7947$${res.locals._uuid}$mEiRlix7947$
    AND         toras.status='public'
    GROUP BY    toras.title,  
                toras.time, 
                toras._uuid 
   `;
        db.any(query)
            .then((v) => {
                console.log(v);
                res.status(200).send(v);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send("שגיאה פנימית בשרת");
            });

        //   res.status(204).send({ token: res.locals.token });
    });
};