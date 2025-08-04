const { Pool } = require("pg");

const DB_URL = "postgresql://postgres:123@localhost:5432/science";

const database = new Pool({
  connectionString: DB_URL,
});

module.exports = database;
