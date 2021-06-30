import React from "react";
import { UserOutlined } from "@ant-design/icons";
import "./RegisteredUserIcon.css";
import { useHistory } from "react-router-dom";

function RegisteredUserIcon(props) {
  const history = useHistory();
  return (
    <div
      className="registered_user"
      onClick={() => {
        history.push("/my_torahs");
      }}
    >
      <span dir="rtl">{"שלום " + props.firstNameOfUser}</span>
      <UserOutlined className="abc" />
    </div>
  );
}
export default RegisteredUserIcon;
