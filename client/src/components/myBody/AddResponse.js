import React from 'react';

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./myBodyCss/AddResponse.css";
function AddResponse() {
  return (
    <div className="add_response_page">
      <button className="add_button">הוסף תגובה</button>
      <div className="add_response">
        <h4
          className="add_response_title"
          contentEditable="true"
          suppressContentEditableWarning={true}
          dir="rtl"
        >
          כותרת
        </h4>

        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          // onReady={(editor) => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
          // }}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
          // onBlur={(event, editor) => {
          //   console.log("Blur.", editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log("Focus.", editor);
          // }}
        />
        <button>שלח</button>
      </div>
    </div>
  );
}
export default AddResponse;
