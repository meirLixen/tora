import React, { useState, useRef } from "react";

import { SearchOutlined } from "@ant-design/icons";
import "./SearchTheSite.css";
function SearchTheSite() {
  const aaa = useRef(null);
  const [a, setA] = useState("hidden");
  const uuu = () => {
    aaa.current.getElementsByTagName("button")[0].addEventListener("click", () => {
      setA("hidden")
    });
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => {
          setA("visible");
          uuu();
        }}
        className="search_the_site"
        dir="rtl"
      >
        <button>
          <SearchOutlined />
        </button>
        <input
          className="input_search_the_site"
          placeholder="חיפוש..."
          type="text"
        />
      </div>
      <div
      className="google_abc"
        ref={aaa}
        style={{
          visibility: a,
          right: "0px",

          position: "absolute",
          top: "51px",
          width: "758px",
        }}
      >
        <div className="gcse-searchbox-only"></div>
      </div>
    </div>
  );
}
export default SearchTheSite;
