const db = require("../config/pg");

module.exports = async function createTableToras() {
  const sql = `CREATE TABLE IF NOT EXISTS toras (
    _uuid uuid DEFAULT uuid_generate_v4 (),
    time timestamp DEFAULT now (),
    title text NOT NULL,
    body text NOT NULL,
    author uuid NOT NULL,
    status text DEFAULT 'private'
    );`;
  await db.any(sql).catch(console.error);
};
// amountToPay
