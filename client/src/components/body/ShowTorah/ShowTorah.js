import React from "react";
import Hebcal from "hebcal";

import "./ShowTorah.css";
import { useState, useEffect } from "react";
import AddComment from "../AddComment/AddComment";
import getTora from "../../../services/getTora";

function ShowTorah() {
  const [tora, setTora] = useState([]);
  var locationHref = window.location.href;
  var searchUuid = locationHref.search("=");
  var uuidOfTora = locationHref.slice(searchUuid + 1);
  useEffect(() => {
    
    getToraFromServer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
const getToraFromServer = ()=>{



  getTora(uuidOfTora)
  .then((response) => {
    response.text().then((bodyOfResponse) => {
      if (response.status === 200) {
        setTora(JSON.parse(bodyOfResponse));
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
  return (
    <div className="show_torah">
      {tora[0] && (
        <>
          <div className="author" dir="rtl">
            {tora[0].toraAuthor}
          </div>
          <h1 className="title">{tora[0].toraTitle}</h1>
          {/* <div className="tags">
            <span dir="rtl">תגיות:</span>
            {props.torahFromServer.Tags.map((tag, index) => (
              <span className="tag" key={`${index}adfdc123`}>
                <span className="ladder">#</span>
                {tag}
              </span>
            ))}
          </div> */}
          <div className="date">
            {Hebcal.HDate(new Date(tora[0].toraTime)).toString("h")}
          </div>

          <h3 dangerouslySetInnerHTML={{ __html: tora[0].toraBody }}></h3>
          <hr />
          <div className="number_responses">
            <h2 dir="rtl">
              {tora[0].commentsAraay[0].commentUuid
                ? tora[0].commentsAraay.length
                : 0}{" "}
              תגובות:
            </h2>
          </div>
          <AddComment uuidOfTora={uuidOfTora} getToraFromServer={getToraFromServer}/>
          <div className="responses">
            {tora[0].commentsAraay[0].commentUuid &&
              tora[0].commentsAraay.map((comment, index) => {
                return (
                  <div className="response" key={`${index}aasasc123`}>
                    <div className="index_response">{index + 1}</div>
                    <div className="data_response">
                      <div className="user_response">
                        {comment.commentAuthor}
                      </div>

                      <details dir="rtl">
                        <summary>
                          <span className="title_response">
                            {comment.commentTitle}
                          </span>
                        </summary>

                        <div className="body_response">
                          {" "}
                          {comment.commentBody}{" "}
                        </div>
                      </details>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}
export default ShowTorah;
