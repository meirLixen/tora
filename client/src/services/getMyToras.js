import domainAndPort from "./domainAndPort";

export default function getMyToras(token) {
  return fetch(`${domainAndPort}/api/get_my_toras`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
}
