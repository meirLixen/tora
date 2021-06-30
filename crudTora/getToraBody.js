const db = require("../config/pg");
module.exports = function getToraBody(app) {
  app.get("/api/get_tora", (req, res) => {
    const query = ` 
    
        SELECT  toras.body AS "toraBody", 
                toras.title AS "toraTitle",  
                toras.time AS "toraTime", 
                toras._uuid AS "toraUuid", 
                "toraAuthor".username AS "toraAuthor", 

                json_agg(
                  json_build_object(
                       'commentUuid',   comments._uuid,
                       'commentTime',   comments.time,
                       'commentTitle',  comments.title,
                       'commentBody',   comments.body,
                       'commentAuthor', "commentAuthor".username
                       )
                  ) AS "commentsAraay"

        FROM        toras

        LEFT JOIN  comments
        ON          comments."toToraOrComment" = toras._uuid  

        INNER JOIN  users "toraAuthor"
        ON          "toraAuthor"._uuid = toras.author

        LEFT JOIN  users "commentAuthor"
        ON          "commentAuthor"._uuid = comments.author

        WHERE       toras._uuid=$mEiRlix7947$${req.headers["uuid-of-tora"]}$mEiRlix7947$

        GROUP BY    "toraBody", 
                    "toraTitle",  
                    "toraTime", 
                    "toraUuid", 
                    "toraAuthor"
      ;`;
    db.any(query)
      .then((toraBody) => {
        res.status(200).send(toraBody);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("שגיאה פנימית בשרת");
      });
  });
};
