const db = require("../config/pg");

module.exports = async function createTableBookmarks() {
  const sql = `CREATE TABLE IF NOT EXISTS bookmarks (
    _uuid     uuid       DEFAULT uuid_generate_v4 (),
    time      timestamp  DEFAULT now (),
    label     text       NOT NULL,
    author    uuid       NOT NULL, 
    "toTora"  uuid       NOT NULL
    );`; 
  await db.any(sql).catch(console.error);
};
// amountToPay
