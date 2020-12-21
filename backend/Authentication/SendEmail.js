const Pool = require('pg').Pool;
var md5 = require('md5');
const nodemailer = require('nodemailer');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Captone1',
    password: 'vinhtoan123',
    port: 5432
})
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'meetingplanner1234@gmail.com',
        pass: 'vinhtoan123'
    }
});
const SendEmail = (req, res) => {
    const { sendEmail } = req.body;
    console.log(sendEmail)
    const code = rn(options)
    pool.query('Select * from users where users_email=$1',
        [sendEmail],
        (error, result) => {
            if(error)
                throw error;
            else if(result.rowCount==0){
                console.log("failed")
                res.status(201).send("not exist")
            }
            else if(result.rowCount >=1){
                console.log("Sucessfully")
                let mailOptions = {
                    mail: 'meetingplanner1234@gmail.com',
                    to: sendEmail,
                    subject: 'Reset password:',
                    text: 'Your meeting verification code is: ' + code.toString()
                };
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        console.log('Error occurs', err);
                    }
                    else {
                        console.log('Email sent!!!');
                        res.status(201).send(code.toString())
                    }
                });
            }
        })
}
const resetPassword=(req,res)=>{
    const {users_email,users_password}=req.body
    pool.query('Update Users set users_password=$1 where users_email=$2',
    [md5(users_password),users_email],
    (error,result)=>{
        if(error)
            throw error
        else{
            console.log(result)
            res.status(201).send("Complete!!!")
        }
    })
}
module.exports = { SendEmail,resetPassword }