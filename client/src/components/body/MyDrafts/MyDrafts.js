import React from 'react';
import Hebcal from "hebcal";
import { useHistory } from "react-router-dom";
import "./MyDrafts.css";
import { useState, useEffect } from "react";
import getMyDrafts from "../../../services/getMyDrafts";
import cookies from "../../../cookies/cookies";
function MyDrafts() {
  const [toras, setToras] = useState("");
  const history = useHistory();
  useEffect(() => {
    getMyDrafts(cookies.getCookie("_token_to_tora"))
      .then((response) => {
        response.text().then((bodyOfResponse) => {
          if (response.status === 200) {
            setToras([...JSON.parse(bodyOfResponse)]);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const userChoseTorah = (tora) => {
    
    history.push("/show_my_torah?uuid=" + tora._uuid);
  };

  return (
    <div className="my_torahs">
      <h1 className="title_my_torahs">דברי התורה שלי</h1>
      {toras &&
        toras.map((tora, index) => (
          <div className="torah" key={`${index}abcz123`}>
            <div className="date_and_numberResponses">
              <div className="date">
              {Hebcal.HDate(new Date(tora.time)).toString("h")}
               
              </div>
              <div className="numberResponses">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.202017 2C0.202017 0.9 1.09202 0 2.19202 0H18.192C19.292 0 20.192 0.9 20.192 2V14C20.192 15.1 19.292 16 18.192 16H4.19202L0.192017 20L0.202017 2Z"
                    fill="black"
                  />
                </svg>
                <span>
                  {tora.count} תגובות{" "}
                </span>
              </div>
            </div> 

            <div className="title" onClick={() => userChoseTorah(tora)}>{tora.title}</div>
          </div>
        ))}
    </div>
  );
}
export default MyDrafts;
//  <div className="tags">
//           {tora.Tags.map((tag, index) => (
//             <span className="tag" key={`${index}abco123`}>
//               <span className="ladder">#</span>
//               {tag}
//             </span>
//           ))}
//         </div>
