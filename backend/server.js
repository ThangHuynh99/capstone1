const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const login=require('./Authentication/Login')
const re=require('./Authentication/Register')
const cre=require('./Authentication/Create')
const changepw =require('./Authentication/Change')
const dashboard = require('./Authentication/Dashboard')
const voting = require('./Authentication/Voting')
const invite = require('./Authentication/Invite')
const view = require ('./Authentication/ViewAdmin')
const schedule=require('./Authentication/Schedule')
const sendE=require('./Authentication/SendEmail')
const deletePoll=require('./Authentication/DeletePoll')
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

// app.post('/checklogin',login.checkLogin);

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

// app.post('/create', urlencodedParser, cre.Create);
app.post('/changepw',changepw.changePassword)
app.post('/checklogin',login.checkLogin)
app.post('/registers',re.register)
app.post('/create',cre.Create)
app.post('/dashboard',dashboard.dashboard);
app.post('/vote/user',voting.voting)
app.delete('/deleteuser',voting.deleteUser)
// app.post('/vote/schedule',voting.voteSchedule)
app.post('/vote/submit',voting.submitVote)
app.post('/invite',invite.invite)
app.get('/viewuser',view.ViewUser)
app.get('/viewpoll',view.ViewPoll)
app.post('/schedule',schedule.Schedule)
app.post('/vote/finaloption',voting.FinalOption)
app.post('/sendemail',sendE.SendEmail)
app.post('/resetpassword',sendE.resetPassword)
app.delete('/deletepoll',deletePoll.deleteRoom)
app.listen(port, () => {
  console.log(`Server started on port `, port);
});
