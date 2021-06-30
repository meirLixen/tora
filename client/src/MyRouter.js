import React from "react";
import EditTorah from "./components/body/editTorah/editTorah";
import "./MyRouter.css";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowMyTorah from "./components/body/ShowMyTorah/ShowMyTorah";
import Header from "./components/header/Header";
import HomePage from "./components/body/Home/Home";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import SignUp from "./components/body/SignUp/SignUp";
import AfterInitialRegistration from "./components/myBody/AfterInitialRegistration";
import ChooseUsername from "./components/body/ChooseUsername/ChooseUsername";
import PersonalAreaRightSidebar from "./components/rightSidebar/PersonalAreaRightSidebar";
import SignInPage from "./components/body/SignIn/SignIn";
import MyTorahs from "./components/body/MyTorahs/MyTorahs";
import AddTorah from "./components/body/AddTorah/AddTorah";
import AccountSettings from "./components/myBody/AccountSettings";
import ShowTorah from "./components/body/ShowTorah/ShowTorah";
import MyBookmarks from "./components/body/MyBookmarks/MyBookmarks"
// import RegisteredUserIcon from "../header/sign_in_sign_up_registered/RegisteredUserIcon";
import context from "./reactContext";
import cookies from "./cookies/cookies";
import getUser from "./services/getUser";
import MyDrafts from "./components/body/MyDrafts/MyDrafts"

const Provider = context.Provider;

function MyRouter() {
  const [temporaryStorage, setTemporaryStorage] = useState(null);
  const [userInformation, setUserInformation] = useState(null);
  const globalState = {
    temporaryStorage,
    setTemporaryStorage,
    userInformation,
    setUserInformation,
  };
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cse.google.com/cse.js?cx=5a872d7bac739716c";
    script.async = true;

    document.body.appendChild(script);
  
    // return () => {
    //   document.body.removeChild(script);
    // }
  }, []);
  useEffect(() => {
    if(cookies.getCookie("_token_to_tora") && !globalState.userInformation) {
       getUser(cookies.getCookie("_token_to_tora"))
         .then((response) => {
           response.text().then((bodyOfResponse) => {
             if (response.status === 200) {
               globalState.setUserInformation({
                 ...JSON.parse(bodyOfResponse)[0],
               });
             } else {
               alert(bodyOfResponse);
               console.error(
                 `status: ${response.status} message: ${bodyOfResponse}`
               );
             }
           });
         })
         .catch((err) => {
           console.error(err);
           alert(err);
         });
     }
   }, []);
 
  return (
    <Provider value={globalState}>
      <header className="header">
        <Header />
      </header>
      {/* <div className="gcse-search"></div> */}
      <Switch>
        <Route exact path="/sign_up_page">
          <div className="body_sign_up_page" dir="rtl">
            <SignUp />
          </div>
        </Route>

        <Route exact path="/sign_in_page">
          <div className="body_sign_up_page" dir="rtl">
            <SignInPage />
          </div>
        </Route>

        <Route exact path="/choose_username">
          <div>
            <ChooseUsername />
          </div>
        </Route>

        <Route exact path="/after_initial_registration">
          <div>
            <AfterInitialRegistration />
          </div>
        </Route>

        <Route exact path="/my_torahs">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <MyTorahs />
          </div>
        </Route>
        <Route exact path="/my_drafts">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <MyDrafts />
          </div>
        </Route>


        
        <Route exact path="/my_bookmarks">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <MyBookmarks />
          </div>
        </Route>
        
        <Route exact path="/add_torah">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <AddTorah />
          </div>
        </Route>
        <Route exact path="/edit_torah">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <EditTorah />
          </div>
        </Route>
        <Route exact path="/account_settings">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="my_body" dir="rtl">
            <AccountSettings />
          </div>
        </Route>

        <Route exact path="/show_torah">
          <div className="right_sidebar" dir="rtl">
            <RightSidebar />
          </div>
          <div className="torah_innovations my_body" dir="rtl">
            <ShowTorah />
          </div>
        </Route>
        <Route exact path="/show_my_torah">
          <div className="right_sidebar" dir="rtl">
            <PersonalAreaRightSidebar />
          </div>
          <div className="torah_innovations my_body" dir="rtl">
            <ShowMyTorah />
          </div>
        </Route>
        <Route exact path="/">
          <div className="right_sidebar" dir="rtl">
            <RightSidebar />
          </div>
          <div className="torah_innovations my_body" dir="rtl">
            <HomePage />
          </div>
        </Route>
       

      </Switch>
    </Provider>
  );
}
export default MyRouter;
