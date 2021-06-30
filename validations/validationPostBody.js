module.exports = function validationPostBody(req, res, next) {
  const postBody = req.body.body;

  if (postBody && typeof postBody === "string" && postBody.length > 30) return next();
  else if(postBody.length <= 30) {res.status(400).send("דבר תורה קצר מידי");}
  else{res.status(400).send("ערך לא חוקי");}

};
function isHTML(str) {
  var doc = new DOMParser().parseFromString(str, "text/html");
  return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
}
