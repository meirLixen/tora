const db = require("../config/pg");

module.exports = async function createExtensionUuidossp() {
  let sql = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await db.any(sql).catch(console.error);
};
