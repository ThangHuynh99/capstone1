const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const login=require('./Authentication/Login')
const re=require('./Authentication/Register')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({ 
        extended: true, 
    })
)
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
app.post('/registers',re.register)
app.listen(port, () => {
  console.log(`Server started on port `, port);
});
