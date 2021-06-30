import React, { useState } from "react";
import { useContext } from "react";
import context from "../../../reactContext";

import "./AddComment.css";
import addComment from "../../../services/addComment";
import cookies from "../../../cookies/cookies";

function AddComment(props) {
    const globalState = useContext(context);
    const newComment = { title: "", body: "" };
    const [visibilityStatus, setVisibilityStatus] = useState(false);
    const saveComment = () => {
        if (
            newComment.title &&
            newComment.title.length > 3 &&
            newComment.body &&
            newComment.body.length > 3
        ) {
            addComment(
                cookies.getCookie("_token_to_tora"),
                props.uuidOfTora,
                newComment
            )
                .then((response) => {
                    if (response.status === 204) {
                        alert("תגובתך נרשמה")
                        setVisibilityStatus(false)
                        props.getToraFromServer()
                    } else {
                        response.text().then((bodyOfResponse) => {
                            alert(bodyOfResponse);
                            console.error(
                                `status: ${response.status} message: ${bodyOfResponse}`
                            );
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    alert(err);
                });
        } else {
            alert("תגובה לא תקינה");
        }
    };

    return (<
        div className="add_response_page" >
        <button onClick={
            () => {

                globalState.userInformation ? setVisibilityStatus(!visibilityStatus) : alert('ע"מ להוסיף תגובה יש להתחבר')
            }
        }
            className="add_button" >
            הוסף תגובה </button> {
            visibilityStatus && (< div className="add_response" >
                <input onChange={
                    (e) => {
                        newComment.title = e.target.value;
                    }
                }
                    type="text"
                    className="title_response"
                    placeholder="כותרת" /
                >
                <textarea onChange={
                    (e) => {
                        newComment.body = e.target.value;
                    }
                }
                    className="body_response"
                    placeholder="התגובה שלך.."
                    rows="4" >
                </textarea>

                <
                    button onClick={saveComment} > שלח </button> </div >
            )
        } </div>
    );
}
export default AddComment;