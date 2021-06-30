import domainAndPort from "./domainAndPort";

export default function signIn(usernameAndPassword) {
  return fetch(`${domainAndPort}/api/sign_in`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usernameAndPassword),
  });
}
