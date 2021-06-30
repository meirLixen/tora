import domainAndPort from "./domainAndPort";

export default function addComment(token, uuidOfTora, comment) {
  return fetch(`${domainAndPort}/api/add_comment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
      "Uuid-Of-Tora": uuidOfTora,
    },
    body: JSON.stringify(comment),
  });
}
