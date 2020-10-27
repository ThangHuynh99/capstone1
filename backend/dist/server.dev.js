"use strict";

var express = require('express');

var app = express();
var port = 3001;

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

var login = require('./Authentication/Login');

var re = require('./Authentication/Register');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.get('/', function (res, req) {
  req.json({
    info: 'Nodejs,Express and SQL server'
  });
}); // app.post('/login', function (req, res) {
//   var user_name=req.body.email;
//   var password=req.body.password;
//   if(user_name=='admin' && password=='admin'){
//       res.send('success');
//   }
//   else{
//     res.send('Failure');
//   }
// })

app.post('/create', urlencodedParser, function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      location = _req$body.location,
      note = _req$body.note;
  var user = {
    title: title,
    location: location,
    note: note
  };
  var user1 = JSON.stringify(user);
  console.log(user1); // console.log("title " + user.title + " " + " location " + user.location + " " + "note " + user.note);
});
app.post('/checklogin', login.checkLogin);
app.post('/registers', re.register);
app.listen(port, function () {
  console.log("Server started on port ", port);
});