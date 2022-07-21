const { Pool } = require("pg");
const { pgConfig } = require("../config.js")


let pool = new Pool(pgConfig);

async function fetchAll(query, ...array) {
  const client = await pool.connect();

  try {
    let { rows } = await client.query(query, array.length ? array : null);

    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    await client.release();
  }
}

module.exports = {
  fetchAll
}
