import domainAndPort from "./domainAndPort";

export default function deleteBookmark(token, bookmarkUuid) {
  return fetch(`${domainAndPort}/api/delete_bookmark`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body:JSON.stringify(bookmarkUuid),
  });
}
