"use strict";

var Pool = require('pg').Pool;

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Capstone1',
  password: '172304',
  port: 5432
});
module.exports = {
  connection: connection
};