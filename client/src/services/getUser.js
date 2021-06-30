import domainAndPort from "./domainAndPort";

export default function getUser(token) {
  return fetch(`${domainAndPort}/api/get_user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
}
