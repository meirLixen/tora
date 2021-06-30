import domainAndPort from "./domainAndPort";

export default function CheckLinkSentToEmail(token) {
  return fetch(`${domainAndPort}/api/email_check`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({ token }),
  });
}
