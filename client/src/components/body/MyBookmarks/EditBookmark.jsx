import React, { useState } from "react";
import cookies from "../../../cookies/cookies";
import context from "../../../reactContext";
import { useContext } from "react";
import "./EditBookmark.css";
import editBookmark from "../../../services/editBookmark";
import deleteBookmark from "../../../services/deleteBookmark";
export default function EditBookmark(props) {
  const globalState = useContext(context);

  const [bookmarkName, setBookmarkName] = useState(
    props.bookmark.bookmarkLabel
  );

  const sendDeleteBookmark = () => {
    deleteBookmark(cookies.getCookie("_token_to_tora"), {
      bookmarkUuid: props.bookmark.bookmarkUuid,
    })
      .then((response) => {
        response.text().then((bodyOfResponse) => {
          if (response.status === 200) {
            var foundIndex =
              globalState.userInformation.bookmarksAraay.findIndex(
                (x) => x.bookmarkUuid === props.bookmark.bookmarkUuid
              );

            globalState.userInformation.bookmarksAraay.splice(foundIndex, 1);

            // [foundIndex] =
            //   JSON.parse(bodyOfResponse)[0];
            globalState.setUserInformation({ ...globalState.userInformation });
          } else {
            alert(bodyOfResponse);
            console.error(
              `status: ${response.status} message: ${bodyOfResponse}`
            );
          }
        });
        props.myArray[props.index] = false;
        props.setMyArray([...props.myArray]);
      })

      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };

  const saveBookmark = () => {
    const bookmark = props.bookmark;
    bookmark.newBookmarkLabel = bookmarkName;

    editBookmark(cookies.getCookie("_token_to_tora"), bookmark)
      .then((response) => {
        response.text().then((bodyOfResponse) => {
          if (response.status === 200) {
            var foundIndex =
              globalState.userInformation.bookmarksAraay.findIndex(
                (x) =>
                  x.bookmarkUuid === JSON.parse(bodyOfResponse)[0].bookmarkUuid
              );
            globalState.userInformation.bookmarksAraay[foundIndex] =
              JSON.parse(bodyOfResponse)[0];
            globalState.setUserInformation({ ...globalState.userInformation });
          } else {
            alert(bodyOfResponse);
            console.error(
              `status: ${response.status} message: ${bodyOfResponse}`
            );
          }
        });
        props.myArray[props.index] = false;
        props.setMyArray([...props.myArray]);
      })

      .catch((err) => {
        console.error(err);
        alert(err);
      });
  };
  const cancelSaveBookmark = () => {
    props.myArray[props.index] = false;
    props.setMyArray([...props.myArray]);
  };
  return (
    <>
      {props.myArray[props.index] && (
        <div className="save_as">
          <input
            placeholder="שמור בשם"
            type="text"
            value={bookmarkName}
            onChange={(e) => {
              setBookmarkName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              saveBookmark();
            }}
          >
            שמור
          </button>
          <button onClick={cancelSaveBookmark}>ביטול</button>
          <button onClick={sendDeleteBookmark}>מחק סימניה</button>
        </div>
      )}
    </>
  );
}
