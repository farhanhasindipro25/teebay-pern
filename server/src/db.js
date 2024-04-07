const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teebay",
  password: "test",
  port: 5432,
});

export default pool;
