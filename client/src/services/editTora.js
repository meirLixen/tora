import domainAndPort from "./domainAndPort";

export default function editTora(token, tora) {
  return fetch(`${domainAndPort}/api/edit_tora`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(tora),
  });
}
