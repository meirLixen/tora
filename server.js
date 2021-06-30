require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
// var cookieSession = require("cookie-session");
// const sessionConfig = {
//   secret: 'MYSECRET',
//   name: 'appName',
//   resave: false,
//   saveUninitialized: false,
//   // store: store,
//   cookie : {
//     sameSite: 'None',Secure: true, // THIS is the config you are looing for.
//   }
// };

// if (process.env.NODE_ENV === 'production') {
//   app.set('trust proxy', 1); // trust first proxy
//   sessionConfig.cookie.secure = true; // serve secure cookies
// }

// app.use(cookieSession(sessionConfig));
// app.use(
//   cookieSession({
//     name: "__session",
//     keys: ["key1"],
//     maxAge: 24 * 60 * 60 * 100,
//     secure: true,
//     httpOnly: true,
//     sameSite: 'none',
//   })
// );
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.text({ type: 'text/html' }))
app.use(express.static(path.join(__dirname, "client/build")));

// require("./zzztest/tableTest")();
// require("./zzztest/dataTest")(app);

// create tables in DB
require("./tables/createTableBookmarks")()
require("./tables/createExtensionUuidossp")();
require("./tables/createTableUsers")();
require("./tables/createTableToras")();
require("./tables/createTableComments")();
//routes
require("./crudBookmarks/deleteBookmark")(app)
require("./crudBookmarks/editBookmark")(app)
require("./crudTora/getMyDrafts")(app)
require("./crudBookmarks/createBookmark")(app) 
require("./addComment/addComment")(app);
require("./crudTora/getToraBody")(app);
require("./crudTora/getToras")(app); 
require("./crudTora/getMyToras")(app);
require("./crudTora/addTora")(app);
require("./crudTora/editTora")(app);
require("./signUp/signUp")(app);
require("./emailVerification/emailVerification")(app);
require("./chooseNamePass/chooseNamePassListen")(app);
require("./signIn/signIn")(app); 
require("./crudTora/deleteTora")(app);
require("./getUser/getUser")(app);
app.listen(process.env.PORT_OF_API, (err) => {
  if (err) return console.log(err);
  console.log("connect");
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  }); 
});   
// function isHTML(str) {
//   var doc = new DOMParser().parseFromString(str, "text/html");
//   return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
// }
"sudo kill -9 `sudo lsof -t -i:5000`"