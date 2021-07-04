const options = {
  capSQL: true,
};
const connection = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

const pgp = require("pg-promise")(options);

const db = pgp(connection);

// const monitor = require("pg-monitor");
// monitor.attach(options);

module.exports = db;
`psql postgresql://meir:737373@localhost:5432/tora`