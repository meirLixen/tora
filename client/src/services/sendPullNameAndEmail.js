import domainAndPort from "./domainAndPort";

export default function sendPullNameAndEmail(fullNameAndEmail) {
  return fetch(`${domainAndPort}/api/sign_up`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fullNameAndEmail),
  });
}
