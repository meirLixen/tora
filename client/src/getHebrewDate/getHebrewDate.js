// const hebrewDate = require("hebrew-date");
// const Hebcal = require("hebcal");
// const foreignDateToHebrewDateFunc = (Year, month, date) => {
//   return hebrewDate(Year, month, date);
// };
// export default function getHebrewDate(Year, month, date) {
//   const foreignDateToHebrewDate = foreignDateToHebrewDateFunc(
//     Year ? Year : new Date().getFullYear(),
//     month ? month : new Date().getMonth() + 1,
//     date ? date : new Date().getDate()
//   );
//   let changeFirstMonthToNissan = foreignDateToHebrewDate.month + 5;
//   if (changeFirstMonthToNissan > 12) {
//     changeFirstMonthToNissan -= 12;
//   }
//   return new Hebcal.HDate(
//     foreignDateToHebrewDate.date,
//     changeFirstMonthToNissan,
//     foreignDateToHebrewDate.year
//   ).toString("h");
// }
// var year = new Hebcal();
// var a = new Date(2014, 0, 1);
// console.log(typeof a);
// console.log();
// console.log(typeof new Date(2014, 0, 1));
// console.log(Hebcal.HDate(a).toString("h"));
// // const d: Date = new Date();