import "./Logo.css";
import React from 'react';

import { useHistory } from "react-router-dom";

function Logo() {
  const history = useHistory();
  const toHomePage = () => {
    history.push("/");
  };
  return (
    <div onClick={toHomePage} className="logo">
      <span>דבר תורה</span>
    </div>
  );
}
export default Logo;
