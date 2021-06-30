import domainAndPort from "./domainAndPort";

export default function editBookmark(token, bookmark) {
  return fetch(`${domainAndPort}/api/edit_bookmark`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(bookmark),
  });
} 
