import React from 'react';
// /my_drafts
import "./PersonalAreaRightSidebar.css";
import { useHistory } from "react-router-dom";

function PersonalAreaRightSidebar() {
  const history = useHistory();
  const toMyTorahsPage = () => {
    history.push("/my_torahs");
  };


  const toMyDraftsPage = () => {
    history.push("/my_drafts");
  };



  const toMyBookmarks = () => {
    history.push("/my_bookmarks");
  };







  const toAddTorahPage = () => {
    history.push("/add_torah");
  };
  const toAccountSettingsPage = () => {
    history.push("/account_settings");
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="personal_area_right_sidebar">
        <div className="icon_username">
          <svg
            width="70"
            height="70"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12V96C0 102.6 5.34 108 12 108H96C102.6 108 108 102.6 108 96V12C108 5.4 102.6 0 96 0H12C5.34 0 0 5.4 0 12ZM72 36C72 45.96 63.96 54 54 54C44.04 54 36 45.96 36 36C36 26.04 44.04 18 54 18C63.96 18 72 26.04 72 36ZM18 84C18 72 42 65.4 54 65.4C66 65.4 90 72 90 84V90H18V84Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="name">מאיר ליקסנברג </div>
        <div className="settings" onClick={toAccountSettingsPage}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9502 8.78333C13.9835 8.53333 14.0002 8.275 14.0002 8C14.0002 7.73333 13.9835 7.46667 13.9418 7.21667L15.6335 5.9C15.7835 5.78333 15.8252 5.55833 15.7335 5.39167L14.1335 2.625C14.0335 2.44167 13.8252 2.38333 13.6418 2.44167L11.6502 3.24167C11.2335 2.925 10.7918 2.65833 10.3002 2.45833L10.0002 0.341667C9.96684 0.141667 9.80017 0 9.60017 0H6.40017C6.20017 0 6.04184 0.141667 6.00851 0.341667L5.70851 2.45833C5.21684 2.65833 4.76684 2.93333 4.35851 3.24167L2.36684 2.44167C2.18351 2.375 1.97517 2.44167 1.87517 2.625L0.283506 5.39167C0.183506 5.56667 0.216839 5.78333 0.383506 5.9L2.07517 7.21667C2.03351 7.46667 2.00017 7.74167 2.00017 8C2.00017 8.25833 2.01684 8.53333 2.05851 8.78333L0.366839 10.1C0.216839 10.2167 0.175173 10.4417 0.266839 10.6083L1.86684 13.375C1.96684 13.5583 2.17517 13.6167 2.35851 13.5583L4.35017 12.7583C4.76684 13.075 5.20851 13.3417 5.70017 13.5417L6.00017 15.6583C6.04184 15.8583 6.20017 16 6.40017 16H9.60017C9.80017 16 9.96684 15.8583 9.99184 15.6583L10.2918 13.5417C10.7835 13.3417 11.2335 13.075 11.6418 12.7583L13.6335 13.5583C13.8168 13.625 14.0252 13.5583 14.1252 13.375L15.7252 10.6083C15.8252 10.425 15.7835 10.2167 15.6252 10.1L13.9502 8.78333ZM8.00017 11C6.35017 11 5.00017 9.65 5.00017 8C5.00017 6.35 6.35017 5 8.00017 5C9.65017 5 11.0002 6.35 11.0002 8C11.0002 9.65 9.65017 11 8.00017 11Z"
              fill="black"
            />
          </svg>
          <span>הגדרות חשבון </span>
        </div>
        <div className="activity">
          {/* <div className="items">פעילות אחרונה </div> */}
          <div className="items" onClick={toMyTorahsPage}>
            דברי התורה שלי{" "}
          </div>
          <div className="items" onClick={toMyDraftsPage}>
            טיוטות
          </div>
          <div className="items" onClick={toAddTorahPage}>
            הוסף דבר תורה{" "}
          </div>
          <div className="items" onClick={toMyBookmarks}>
            הסימניות שלי{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalAreaRightSidebar;
