import domainAndPort from "./domainAndPort";

export default function getToras() {
  return fetch(`${domainAndPort}/api/get_toras`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
