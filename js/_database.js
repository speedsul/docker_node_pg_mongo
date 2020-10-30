const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'postgres',
  password: 'root',
  port: 5432
})

module.exports = client
