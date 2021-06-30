module.exports = function validationPostTitle(req, res, next) {
  const postTitle = req.body.title;

  if (postTitle && typeof postTitle === "string" && postTitle.length > 1)
    return next();
  else res.status(400).send("כותרת לא חוקית");
};
