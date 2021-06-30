import domainAndPort from "./domainAndPort";

export default function addTora(token, tora) {
  return fetch(`${domainAndPort}/api/add_tora`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(tora),
  });
}
