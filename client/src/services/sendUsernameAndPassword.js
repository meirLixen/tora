import domainAndPort from "./domainAndPort";

export default function sendUsernameAndPassword(token, usernameAndPassword) {
  return fetch(`${domainAndPort}/api/choose_name_pass`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(usernameAndPassword),
  });
}
