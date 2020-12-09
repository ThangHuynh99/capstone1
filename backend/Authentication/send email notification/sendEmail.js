

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'vinhtoan710@gmail.com',
        pass: 'vinhtoan'
    }
});

// Step 2
let mailOptions = {
    from: 'vinhtoan710@gmail.com',
    to: 'vinhtoan20@gmail.com',
    subject: 'Poll information',
    text: ' 25/12/2020 7:00 - 9:00 at 254 nvl'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs', err );
    }
    return log('Email sent!!!');
});
// const express = require("express");
// const bodyParser = require('body-parser');
// // const exphbs = require('express-handlebars');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3002;

// // app.engine('handlebars', exphbs());
// // app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('hello');
// });
// let transporter = nodemailer.createTransport({
//     host: 'mail.YOURDOMAIN.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'vinhtoan20@gmail.com', // generated ethereal user
//         pass: 'YOURPASSWORD'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Nodemailer Contact" <your@email.com>', // sender address
//       to: 'RECEIVEREMAILS', // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);   
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'});
//   });

// app.listen(3000, () => console.log('Server started...'));


// // //step 1 : đây t nghĩ là email của host để gửi cho participants
// // let transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth:{
// //         user:'vinhtoan20@gmail.com',
// //         pass:'vinhtoan123'
// //     }
// // });

// // //step 2: Nội dung của email và email người nhận.
// // let mailOption = {
// //     from: 'vinhtoan20@gmail.com',
// //     to: 'vinhtoan710@gmail.com',
// //     cc: '',
// //     bcc: '',
// //     subject: 'Poll information',
// //     text: ' 25/12/2020 7:00 - 9:00 at 254 nvl'
// // };

// // //step 3: send mail
// // transporter.sendMail(mailOption, function(err, data){
// //     if(err){
// //         console.log('Error Occurs', err);
// //     }else{
// //         console.log('send successful');
// //     }
// // });
// // app.listen(port, () => {
// //     console.log(`Server started on port`);
// // });