//install dotenv
//install nodemailer
const express = require("express");
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Server started on port`);
});

//step 1 : đây t nghĩ là email của host để gửi cho participants
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'thang.huynh304@gmail.com',
        pass:'123456'
    }
});

//step 2: Nội dung của email và email người nhận.
let mailOption = {
    from: 'thang.huynh304@gmail.com',
    to: 'vetsieuquay@gmail.com',
    cc: '',
    bcc: '',
    subject: 'Poll information',
    text: ' 25/12/2020 7:00 - 9:00 at 254 nvl'
};

//step 3: send mail
transporter.sendMail(mailOption, function(err, data){
    if(err){
        console.log('Error Occurs', err);
    }else{
        console.log('send successful');
    }
});