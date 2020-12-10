

const nodemailer = require('nodemailer');

// Step 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'meetingplanner1234@gmail.com',
        pass: 'vinhtoan123'
    }
});
const data = [
    {
        to: 'vinhtoan20@gmail.com',
    },
    {
        to: 'vinhtoan710@gmail.com',
    }
]
// console.log(data[0].to)
// Step 2
const dataView=data.forEach(element => {
    let mailOptions = {
        mail: 'meetingplanner1234@gmail.com',
        to: element.to,
        subject: 'Poll information',
        text: ' 25/12/2020 7:00 - 9:00 at 254 nvl'
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occurs', err);
        }
        else {
            console.log('Email sent!!!');
            console.log(data)
        }
    });
});
console.log(dataView)


// Step 3
