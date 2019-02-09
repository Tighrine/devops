const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'aghiles',
    password: 'root',
    database: 'devops'
})

module.exports = pool