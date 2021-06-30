const db = require("../config/pg");

module.exports = async function createTableBusinesses() {
  const sql = `CREATE TABLE IF NOT EXISTS users (
    _uuid uuid DEFAULT uuid_generate_v4 (),
    email text NOT NULL UNIQUE,
    "firstName" text NOT NULL CHECK (char_length("firstName") > 1),
    "lastName" text NOT NULL CHECK (char_length("lastName") > 1),
    "emailVerified" boolean DEFAULT false,
    username text, 
    password text
    );`;
  await db.any(sql).catch(console.error);
};
// amountToPay
