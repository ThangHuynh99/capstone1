const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
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

app.post('/checklogin',login.checkLogin);

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

app.post('/create', urlencodedParser, (req, res) => {
  const { title, location, note } = req.body;
  const user = {title: title, location: location, note: note};
  const user1 = JSON.stringify(user);

  console.log(user1);
  // console.log("title " + user.title + " " + " location " + user.location + " " + "note " + user.note);

});

app.listen(port, () => {
  console.log(`Server started on port `, port);
});
