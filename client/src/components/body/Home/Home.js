import React from "react";
import Hebcal from "hebcal";
import AddBookmark from "./AddBookmark";
import "./Home.css";
import { useState, useEffect } from "react";
import getToras from "../../../services/getToras";
import { useHistory } from "react-router-dom";
function HomePage() {
 
  const history = useHistory();
  const [toras, setToras] = useState(null);

  const [myArray, setMyArray] = useState([]);



  useEffect(() => {
    getToras()
      .then((response) => {
        response.text().then((bodyOfResponse) => {
          if (response.status === 200) {
            setToras([...JSON.parse(bodyOfResponse)]);
            var array = []
            for (let index = 0; index < [...JSON.parse(bodyOfResponse)].length; index++) {
              array[index] = false
            }
            setMyArray([...array])
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
    history.push("/show_torah?uuid=" + tora._uuid);
  };
  return (
    <>
      {toras &&
        toras.map((tora, index) => (
          <div className="innovat" key={`${index}abcw123`}>
            <div className="user_and_date">
              <svg
                className="svg_user"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.55556V60.4444C0 64.6 3.36222 68 7.55556 68H60.4444C64.6 68 68 64.6 68 60.4444V7.55556C68 3.4 64.6 0 60.4444 0H7.55556C3.36222 0 0 3.4 0 7.55556ZM45.3333 22.6667C45.3333 28.9378 40.2711 34 34 34C27.7289 34 22.6667 28.9378 22.6667 22.6667C22.6667 16.3956 27.7289 11.3333 34 11.3333C40.2711 11.3333 45.3333 16.3956 45.3333 22.6667ZM11.3333 52.8889C11.3333 45.3333 26.4444 41.1778 34 41.1778C41.5556 41.1778 56.6667 45.3333 56.6667 52.8889V56.6667H11.3333V52.8889Z"
                  fill="black"
                />
              </svg>
              <div className="author">{tora.username}</div>
              <div className="date">
                {Hebcal.HDate(new Date(tora.time)).toString("h")}
              </div>
              <div className="numberResponses">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.202017 2C0.202017 0.9 1.09202 0 2.19202 0H18.192C19.292 0 20.192 0.9 20.192 2V14C20.192 15.1 19.292 16 18.192 16H4.19202L0.192017 20L0.202017 2Z"
                    fill="black"
                  />
                </svg>
                <span>{tora.count || 0} תגובות </span>
              </div>
              <div className="save">
                <div
                  className="save_internal"
                  onClick={() => {
                    myArray[index] = true
                    setMyArray([...myArray])
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
                      fill="black"
                    />
                  </svg>
                  <span>שמור</span>
                </div>
                <AddBookmark
                  setMyArray={setMyArray}
                  myArray={myArray}
                  tora={tora}
                  index={index}
                />

              </div>
            </div>

            <div className="title" onClick={() => userChoseTorah(tora)}>
              {tora.title}
            </div>

            <div className="tags">
              {/* {tora.Tags.map((tag, index) => (
                <span className="tag" key={`${index}abc123`}>
                  <span className="ladder">#</span>
                  {tag}
                </span>
              ))} */}
            </div>
          </div>
        ))}
    </>
  );
}
export default HomePage;
