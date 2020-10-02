const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const login=require('./Authentication/Login')
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.get('/',(res,req) =>{
  req.json({info:'Nodejs,Express and SQL server'})
})
app.post('/checklogin',login.checkLogin)
// app.post('/login', function (req, res) {
//   var user_name=req.body.email;
//   var password=req.body.password;
//   if(user_name=='admin' && password=='admin'){
//       res.send('success');
//   }
//   else{
//     res.send('Failure');
//   }
// })

app.post('/create', (req, res) => {
  const user = {title: req.body.title, location: req.body.location, note: req.body.note};
  req.send(user);
});

app.listen(port, () => {
  console.log(`Server started on port `, port);
});
