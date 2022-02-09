const Pool = require("pg").Pool

const pool = new Pool({
    user: 'elias2',
    password: 'password123',
    host:'localhost',
    port: 5432,
    database: 'jwtauth'
})

module.exports = pool;