import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./editTorah.css";
import deleteTora from "../../../services/deleteTora"
import "@ckeditor/ckeditor5-build-classic/build/translations/he";
import cookies from "../../../cookies/cookies";
import editTora from "../../../services/editTora";
import { useContext } from "react";
import context from "../../../reactContext";
import { useHistory } from "react-router-dom";

function EditTorah() {
  const history = useHistory();

  const globalState = useContext(context);
  const [tora, setTora] = useState(null);
  const updatedTora = { oldTora: null, title: "", body: "", status: "private" };
  useEffect(() => {
    setTora(globalState.temporaryStorage.tora[0]);
  }, []);

  const saveTora = (status) => {
    var message = updatedTora.status === "private" ? "נשמר" : `פורסם`

    updatedTora.status = status;
    updatedTora.oldTora = tora;
    if (updatedTora.title === "" && updatedTora.body === "") {
      return alert("לא נעשו שינויים");
    } else if (updatedTora.title === "") {
      updatedTora.title = tora.toraTitle;
    } else if (updatedTora.body === "") {
      updatedTora.body = tora.toraBody;
    }
    editTora(cookies.getCookie("_token_to_tora"), updatedTora)
      .then((response) => {
        if (response.status === 204) {

          alert(`דבר התורה ${message} בהצלחה`);
          history.push("/my_torahs")

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
  };
  const deleteMyTora = () => {
    deleteTora(cookies.getCookie("_token_to_tora"), tora.toraUuid)
      .then((response) => {
        if (response.status === 204) {
          alert("דבר התורה נמחק בהצלחה")
          history.push("/my_torahs")

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

  };
  return (
    <>
      {" "}
      {tora && (
        <div className="edit_torah">
          <h4 dir="rtl">כותרת:</h4>
          <input
            onChange={(e) => {
              updatedTora.title = e.target.value;
            }}
            defaultValue={tora.toraTitle}
            className="title_of_tora"
            dir="rtl"
          />

          <div>
            <CKEditor
              data={tora.toraBody}
              editor={ClassicEditor}
              config={{ language: "he" }}
              onChange={(event, editor) => {
                updatedTora.body = editor.getData();
              }}
            />
          </div>
          <button
            onClick={() => {
              saveTora("private");
            }}
          >
            שמירה
          </button>
          <button
            onClick={() => {
              saveTora("public");
            }}
          >
            פרסום
          </button>
          <button
            onClick={() => {
              deleteMyTora();
            }}
          >
            מחיקת דבר תורה
          </button>
        </div>
      )}
    </>
  );
}
export default EditTorah;
