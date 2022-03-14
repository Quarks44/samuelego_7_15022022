// Importation Modules et/ou client
const mysql = require('mysql2');
const dotenv = require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  database: 'groupomania',
  password: process.env.DB_PASS
});

 
module.exports = pool.promise( console.log("Connection ok!"));
