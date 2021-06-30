const domainAndPort = process.env.PORT_OF_API
  ? process.env.URL + ":" + process.env.PORT_OF_API
  : "http://localhost:5000";
export default domainAndPort;
