import React from "react";

import "antd/dist/antd.css";
import MyRouter from "./MyRouter";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// const createBrowserHistory = require("history").createBrowserHistory;

function App() {
  // const history = createBrowserHistory();
console.log(process.env.URL);
  return (
    <Router>
      <div className="App">
        <MyRouter />
        
      </div>
     
    </Router>
  );
}

export default App;
