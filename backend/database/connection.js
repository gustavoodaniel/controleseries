const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'movies-controll'
})

module.exports = Connection;
