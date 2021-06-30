import React from 'react';

import { Cascader } from "antd";
function Cascader2() {
  const options = [
    {
      value: `תנ"ך`,
      label: `תנ"ך`,
      children: [
        {
          value: "תורה",
          label: "תורה",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },

    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

  function onChange(value) {
    console.log(value);
  }
  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  );
}
export default Cascader2;

// ReactDOM.render(
//   <Cascader options={options} onChange={onChange} placeholder="Please select" />,
//   mountNode,
// );

// const category = [`תנ"ך`, `משנה`, `גמרא`, `הלכה`, `מוסר וחסידות`];

// const tanach = [`תורה`, `נביאים`, `כתובים`];

// const tora = [`בראשית`, `שמות`, `ויקרא`, `במדבר`, `דברים`];

// const nevihim = [
//   `יהושוע`,
//   `שופטים`,
//   `שמואל`,
//   `מלכים`,
//   `ישעיהו`,
//   `ירמיהו`,
//   `יחזקאל`,
//   `הושע`,
//   `יואל`,
//   `עמוס`,
//   `עובדיה`,
//   `יונה`,
//   `מיכה`,
//   `נחום`,
//   `חבקוק`,
//   `צפניה`,
//   `חגי`,
//   `זכריה`,
//   `מלאכי`,
// ];
// const ctuvim = [
//     `דברי הימים`,
// `תהילים`,
// `איוב`,
// `משלי`,
// `רות`,
// `שיר השירים`,
// `קוהלת`,
// `איכה`,
// `אסתר`,
// `דניאל`,
// `עזרא / נחמיה`,

// ]
