"use strict";

var Pool = require('pg').Pool;

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Captone1',
  password: 'vinhtoan123',
  port: 5432
});

var register = function register(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;

  try {
    pool.query('Insert into Users (users_email ,users_password) values ($1,$2)', [email, password], function (error, result) {
      if (error) {
        console.log("Error : ", error);
        res.status(201).send("Error : ".concat(error));
      } else if (result.rowCount >= 1) {
        console.log("sucessfull");
        res.status(201).send("Complete");
      }
    });
  } catch (error) {
    res.status(201).send("Error : ".concat(error));
  }
};

module.exports = {
  register: register
};