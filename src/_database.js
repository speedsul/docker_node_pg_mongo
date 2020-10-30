const pg = require('pg')

const client = new pg.Client({
  user: 'root',
  host: 'postgres',
  database: 'db',
  password: 'postgres',
  port: 5432
})

module.exports = client
