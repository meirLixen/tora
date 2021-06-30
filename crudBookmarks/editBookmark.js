const db = require("../config/pg");

const verifyToken = require("../jwt/verifyToken");

module.exports = function editBookmark(app) {
    app.post(
        "/api/edit_bookmark",
        verifyToken,

        (req, res) => {
            console.log(req.body);
            const query = `UPDATE       bookmarks 
                           SET          label=$mEiRlix7947$${req.body.newBookmarkLabel}$mEiRlix7947$
                           WHERE        _uuid = $mEiRlix7947$${req.body.bookmarkUuid}$mEiRlix7947$
                           RETURNING    _uuid AS "bookmarkUuid", label AS "bookmarkLabel", "toTora" AS "bookmarkToTora"
                           ;`;
            db.any(query)
                .then((v) => {
                    res.status(200).send(v);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).send("שגיאה פנימית בשרת");
                });

        }
    );
};
