import React from "react";
import Hebcal from "hebcal";
import { useHistory } from "react-router-dom";

import "./ShowMyTorah.css";
import { useContext } from "react";
import { useState, useEffect } from "react";
import AddComment from "../AddComment/AddComment";
import context from "../../../reactContext";
import getTora from "../../../services/getTora";

function ShowTorah() {
  const globalState = useContext(context);
  var locationHref = window.location.href;
  var searchUuid = locationHref.search("=");
  var uuidOfTora = locationHref.slice(searchUuid + 1);
  const [tora, setTora] = useState([]);
  const history = useHistory();
  useEffect(() => {
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const editTorah = () => {
    globalState.setTemporaryStorage({
      ...globalState.temporaryStorage,
      tora,
    });
    history.push("/edit_torah");
  };
  return (
    <div className="show_torah">
      <button
        className="editTorah"
        onClick={() => {
          editTorah();
        }}
      >
        עריכת דבר תורה
      </button>
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
          <AddComment uuidOfTora={uuidOfTora} />
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

// const torahFromServer = {
//   author: "מאיר",
//   date: `כ"ה תשרי תשפ"א`,
//   title: "מאימתי קורין את שמע בערבין",
//   numberResponses: 7,
//   Tags: ["גמרא", "מסכת ברכות דף ב", "הלכות קש"],
//   id: "abc123456789565655",
//   body: `הנה בזמן הראשונים נוהגים היו לקרות קריאת שמע בברכותיה ולהתפלל מעריב קודם צאת הכוכבים וכתב הרא"ש וז"ל: פירש"י ואנן שקורין שמע בבית הכנסת קודם צאת הכוכבים אין אנו יוצאים ידי חובתנו אלא בקריאת שמע שעל מטתנו פרק ראשון ומה שאנו קורין אותה בבית הכנסת כדי לעמוד בתפלה מתוך דברי תורה והכי תניא בברכות ירושלמי בריש פירקין הקורא את שמע קודם לכן לא יצא א"כ למה קורין אותה בבית הכנסת לא להוציא ידי חובתן אלא כדי לעמוד בתפלה מתוך דברי תורה וכן כתב הריב"א והרי"ץ גיאת ז"ל וכן כתב רב עמרם ז"ל (ומחמת זה כתב) שצריך לברך אשר קדשנו במצותיו וצונו על קריאת שמע כשהוא קורא לפני מטתו מתוך דבריהם משמע שאדם יוצא ידי חובתו מתוך אותה קריאה ולא נראה לר"ת ז"ל שהרי קריאת שמע שעל מטתו אין אנו קורין כי אם פרשה ראשונה ושלא בברכותיה ובבית הכנסת אנו קורין אותה כולה בברכותיה בלא זמנה וכו' ועוד הקשה דאם כן אנו נוהגין כרבי יהושע בן לוי דאמר (לקמן דף ד') תפלות באמצע תקנום ואנן קיימא לן כרבי יוחנן דאמר דקריאת שמע של ערבית תחלה ואח"כ תפלה דתניא לקמן בפירקין כוותיה ופירש ר"ת ז"ל דקריאת שמע של בית הכנסת עיקר ומה שאנו קורין אותה בעוד יום דקיימא לן כר' יהודה דאמר לקמן בפרק תפלת השחר (דף כ"ו) תפלת המנחה עד פלג המנחה והוא שעה ורביע קודם הלילה מכאן ואילך הוי לילה לענין תפלת המנחה (שכלה זמן תפלת המנחה ומתחיל זמן ערבית) והוא הדין לענין קריאת שמע (שלדעת רבי יהודה זמן קריאת שמע של ערבית מתחיל מפלג המנחה) ואמרינן לקמן דעבד כמר עבד ודעבד כמר עבד (כלומר שלא נפסקה הלכה בזה ורשאי אדם לנהוג כרבי יהודה) ואמרינן נמי לקמן רב צלי של שבת בערב שבת אלמא חשיב לילה לענין תפלת הערב והוא הדין לענין קריאת שמע וכו' ומה שאמר בירושלמי שהיו קורין את שמע כדי לעמוד בתפלה מתוך דברי תורה לא שהיו קורין אותה בברכותיה אלא שהיו קורין פרשה שמע כמו שאנו רגילים לקרות אשרי קודם תפלת המנחה ומיהו קצת קשה דלענין תפלת המנחה עבדינן כרבנן ומתפללין פעמים תפלת המנחה אחר פלג המנחה ולענין קריאת שמע חשבינן ליה לילה כמו ר' יהודה והוי כמו שדרה וגלגולת תרי קולי דסתרי אהדדי (ערובין דף ז') והא דאמרינן לקמן דעבד כמר עבד ודעבד כמר עבד ה"פ לא אפסיק הלכתא לא כרבי יהודה ולא כרבנן מי שירצה יעשה הכל כרבי יהודה או הכל כרבנן ולא שיתפוס קולא של שניהם וי"ל דלענין תפלה הקלו ולא נהירא לי מה שהביא רבינו תם ז"ל ראיה מתפלת המנחה שהיא עד פלג המנחה דתפלות כנגד תמידים תקנום ותמיד (של בין הערבים) היה קרב והולך עד פלג המנחה אבל לענין קריאת שמע לאו זמן שכיבה הוא וכו' ונראה לקיים המנהג שאנו סוברים כשאר התנאים שמקדימין שעת הקריאת שמע לצאת הכוכבים (כדאיתא בגמרא לקמן) ואף על גב דלית הלכתא כר' אליעזר (שמקדים שעת קריאת שמע לצאת הכוכבים) לגבי ר' יהושע ולא כרבי מאיר לגבי רבי יהודה מכל מקום בתפלה הקלו וגם מתוך הדחק נהגו כך לפי שמתקבצין הצבור לתפלת המנחה ואילו לא היו קורין את שמע ומתפללין תפלת הערב עד צאת הכוכבים היה כל אחד ואחד הולך לביתו והיה טורח להם להתקבץ לאחר מכאן ולא היו מתפללים בצבור (ופעמים היו שוכחין ולא היו מתפללין כלל - רשב"א) לפיכך נהגו העם לקרות שמע ולהתפלל קודם צאת הכוכבים וסמכו על הני תנאי כדפירשתי אף על גב דלכתחלה אין לקרות קריאת שמע עד צאת הכוכבים וכו' עכ"ל וכתב הטור סימן רל"ה דמ"מ גם לפירוש הרא"ש אין למהר לקרותה כל כך מבעוד יום קודם צאת הכוכבים כי דבר מועט הוא בין תנאי דמתני' ובין תנאי דברייתא ע"כ וכתב הבית יוסף סימן רל"ה וז"ל: וא"ת היאך הוא אומר ברכות קריאת שמע בבית הכנסת כיון שאינו יוצא ידי חובת קריאת שמע באותה קריאה הרי הן ברכות לבטלה כבר כתב הרשב"א בתשובה (חלק א' סימן מ"ז) אל תתמה דברכות קריאת שמע אינן ברכות של קריאת שמע ממש כברכת התורה וברכת המצות שאם כן היה לנו לברך לקרות את שמע אלא ברכות הן שנתקנו בפני עצמן אלא שתקנו לאמרם לפני קריאת שמע ולאחריו וכן הסכימו הגאונים ע"כ וז"ל רבינו יונה: ועדיין יש לשאול כיון שאינו זמן קריאת שמע בשעה שקורין אותה בבית הכנסת היאך יוצא ידי חובה מהברכות אם אינו לילה לענין קריאת שמע ויש לומר שאע"פ שאינו לילה ממש מפני שלא יצאו הכוכבים אפילו הכי כיון ששקעה חמה והוי לילה לענין תפלה של ערבית כדלקמן הכא נמי דיינינן ליה לילה לקריאת הברכות עכ"ל וכתב המשנ"ב בסימן רל"ה בשער הציון וז"ל: ומשמע מדבריו דאם אמר הברכות קודם שקיעה חוזר ומברך אכן מסוף דבריו שכתב דהוא דומה לתפלה של ערבית ואם כן כי היכי דלענין תפלה בודאי יצא מפלג המנחה ולמעלה הכי נמי לענין ברכות בדיעבד עכ"ל ובפוסקים סימן רל"ה ע"כ `,
//   responses: [
//     {
//       userResponse: "חיים",

//       titleResponse: `ביאור שיטת רבינו תם`,
//       idResponse: "jdhj77687khdiuguig",
//       bodyResponse: `לכאורה קשה מאוד להבין את דברי רבינו תם וכמו שהקשה הרא"ש שלא שייך לקשר בין תפלת המנחה לקש אמנם יש לתרץ דסל לרת וכו' ועיין בספר דעת משה שביאר כדברינו ולכאורה כך יש לבאר ודו"ק היטב `,
//     },
//     {
//       userResponse: "חיים",
//       dateResponse: `כ"ו כסלו תשפ"א`,
//       titleResponse: `ביאור שיטת רבינו תם`,
//       idResponse: "jdhj77687khdiuguig",
//       bodyResponse: `לכאורה קשה מאוד להבין את דברי רבינו תם וכמו שהקשה הרא"ש שלא שייך לקשר בין תפלת המנחה לקש אמנם יש לתרץ דסל לרת וכו' ועיין בספר דעת משה שביאר כדברינו ולכאורה כך יש לבאר ודו"ק היטב `,
//     },
//   ],
// };
// const props = { torahFromServer: torahFromServer };

// {/* <img onload="for (let index = 0; index < 1000; index++) {
//                 alert('sdfsdf');
//               }" src="https://upload.wikimedia.org/wikipedia/commons/2/22/Tefillin.JPG"> */}
