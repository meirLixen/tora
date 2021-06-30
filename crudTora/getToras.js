const db = require("../config/pg");
module.exports = function getToras(app) {
  app.get("/api/get_toras", (req, res) => {
    const query = `
      SELECT      toras.title,  
                  toras.time, 
                  toras._uuid, 
                  users.username, 
                  COUNT(comments) 
      FROM        toras 
      INNER JOIN  users
      ON          users._uuid = toras.author
      LEFT JOIN   comments 
      ON          comments."toToraOrComment" = toras._uuid
      WHERE       toras.status = 'public'
      GROUP BY    toras.title,  
                  toras.time, 
                  toras._uuid, 
                  users.username
     
     `;
    

    db.any(query)
      .then((toras) => {
        res.status(200).send(toras);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("שגיאה פנימית בשרת");
      });
  });
};
// WHERE status='public'
