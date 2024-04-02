const {Pool} = require('pg');

// Pool class to create a new pool that will connect to the database
const pool = new Pool({
host: "db",
port: 5432,
user: "postgres",
password: "password",
database: "db123"

})


module.exports = pool;