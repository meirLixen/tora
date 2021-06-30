import "./HebrewDate.css";
import React from "react";
const Hebcal = require("hebcal");

function HebrewDate() {
  const getDayInHebrew = (day) => {
    var dayInHebrew;
    switch (day) {
      case 0:
        dayInHebrew = "יום ראשון";
        break;
      case 1:
        dayInHebrew = "יום שני";
        break;
      case 2:
        dayInHebrew = "יום שלישי";
        break;
      case 3:
        dayInHebrew = "יום רביעי";
        break;
      case 4:
        dayInHebrew = "יום חמישי";
        break;
      case 5:
        dayInHebrew = "יום שישי";
        break;
      case 6:
        dayInHebrew = "שבת קודש";
        break;
      default:
        dayInHebrew = "יום...";
    }
    return dayInHebrew;
  };

  return (
    <div className="hebrew_date">
      <span>{`${getDayInHebrew(new Date().getDay())}`}</span>
      <br />
      <span>{new Hebcal.HDate().toString("h")}</span>
    </div>
  );
}
export default HebrewDate;
