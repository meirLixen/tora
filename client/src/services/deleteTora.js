import domainAndPort from "./domainAndPort";

export default function deleteTora(token, toraUuid) {
  console.log(toraUuid);
  return fetch(`${domainAndPort}/api/delete_tora`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body:JSON.stringify({toraUuid}),
  });
}
