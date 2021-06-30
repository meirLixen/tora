import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./AddTorah.css";
import "@ckeditor/ckeditor5-build-classic/build/translations/he";
import cookies from "../../../cookies/cookies";
import addTora from "../../../services/addTora";
import { useHistory } from "react-router-dom";

function AddTorah() {
  const history = useHistory();
  const newTora = { title: "", body: "", status: "private" };
  const saveTora = (status) => {
    newTora.status = status;
    var message = newTora.status === "private" ? "נשמר" : `פורסם`
    addTora(cookies.getCookie("_token_to_tora"), newTora)
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
  return (
    <div className="add_torah">
      <h4 dir="rtl">כותרת:</h4>
      <input
        onChange={(e) => {
          newTora.title = e.target.value;
        }}
        className="title_of_tora"
        dir="rtl"
      />

      <div>
        <CKEditor
          data=""
          editor={ClassicEditor}
          config={{ language: "he" }}
          onChange={(event, editor) => {
            newTora.body = editor.getData();
          }}
        />
      </div>
      <button
        onClick={() => {
          saveTora("private");

        }}
      >
        שמירה כטיוטה
      </button>
      <button
        onClick={() => {
          saveTora("public");
        }}
      >
        פרסום
      </button>
    </div>
  );
}
export default AddTorah;
