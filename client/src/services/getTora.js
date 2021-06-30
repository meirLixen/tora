import domainAndPort from "./domainAndPort";

export default function getTora(uuidOfTora) {
  return fetch(`${domainAndPort}/api/get_tora`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Uuid-Of-Tora": uuidOfTora,
    },
  });
}
