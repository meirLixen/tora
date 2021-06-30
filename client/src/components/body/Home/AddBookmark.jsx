import React, { useState } from "react";
import addBookmark from "../../../services/addBookmark";
import cookies from "../../../cookies/cookies";
import context from "../../../reactContext";
import { useContext } from "react";

export default function AddBookmark(props) {
    const globalState = useContext(context);

    const [bookmarkName, setBookmarkName] = useState(props.tora.title);

    const saveBookmark = (toraUuid) => {
        const bookmark = { bookmarkName, toraUuid };

        addBookmark(cookies.getCookie("_token_to_tora"), bookmark)
            .then((response) => {
                response.text().then((bodyOfResponse) => {
                    if (response.status === 200) {
                        alert("הסימניה נוספה למועדפים באזור האישי");
                        globalState.userInformation.bookmarksAraay.push(JSON.parse(bodyOfResponse)[0])
                        globalState.setUserInformation({ ...globalState.userInformation })
                    } else {
                        alert(bodyOfResponse);
                        console.error(
                            `status: ${response.status} message: ${bodyOfResponse}`
                        );
                    }
                });
                props.myArray[props.index] = false
                props.setMyArray([...props.myArray])
            })

            .catch((err) => {
                console.error(err);
                alert(err);
            });
    };
    const cancelSaveBookmark = () => {
        props.myArray[props.index] = false
        props.setMyArray([...props.myArray])
    };
    return (
        <>{props.myArray[props.index] &&
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
                        saveBookmark(props.tora._uuid);
                    }}
                >
                    שמור
                </button>
                <button onClick={cancelSaveBookmark}>ביטול</button>
            </div>}</>


    )
}