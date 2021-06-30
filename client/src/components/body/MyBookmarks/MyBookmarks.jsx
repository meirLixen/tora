import React from "react";
import { useContext, useState } from "react";
import context from "../../../reactContext";
import { useHistory } from "react-router-dom";
import "./MyBookmarks.css";
import { FormOutlined } from "@ant-design/icons";
import EditBookmark from "./EditBookmark";
export default function MyBookmarks() {
  const [myArray, setMyArray] = useState([]);

  const globalState = useContext(context);
  const history = useHistory();
  const userChoseTorah = (bookmark) => {
    history.push("/show_torah?uuid=" + bookmark.bookmarkToTora);
  };

  return (
    <ul>
      {globalState.userInformation &&
      globalState.userInformation.bookmarksAraay[0].bookmarkUuid ? (
        globalState.userInformation.bookmarksAraay.map((bookmark, index) => {
          myArray.push(false);
          return (
            <div key={index} className="my_bookmarks">
              <li
                onClick={() => {
                  userChoseTorah(bookmark);
                }}
              >
                {bookmark.bookmarkLabel}
              </li>
              <div className="edit_bookmark">
                <FormOutlined
                  onClick={() => {
                    myArray[index] = true;
                    setMyArray([...myArray]);
                  }}
                />
                <EditBookmark
                  myArray={myArray}
                  index={index}
                  setMyArray={setMyArray}
                  bookmark={bookmark}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div>אין סימניות</div>
      )}
    </ul>
  );
}
