const Pool = require('pg').Pool;
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
const invite = async (req, res) => {
        const { user_email, poll_id, schedule } = req.body;
        // console.log(user_email)
        console.log(poll_id)
        // console.log(schedule)
        pool.query('Select * from Users where users_email=$1 ',
                [user_email],
                (error, result) => {
                        if (error)
                                throw error
                        else if (result.rowCount === 0) {
                                res.status(201).send("not exist")
                        }
                        else if (result.rowCount >= 1) {
                                console.log(result)
                                const users_email = result.rows[0].users_email
                                const users_id = result.rows[0].users_id
                                console.log("user_id: " + users_id)
                                pool.query('Select * from poll_user where users_id=$1 and poll_id=$2', [users_id, poll_id], (error, result1) => {
                                        if (error)
                                                throw error;
                                        else if (result1.rowCount >= 1) {
                                                res.status(201).send("Exist")
                                                // console.log("tài khoảng dã có trong poll")
                                        }
                                        else if (result1.rowCount === 0) {
                                                console.log("Ket qua Poll_user: " + result1)
                                                const User = checkUser(poll_id, users_id)
                                                console.log(User)
                                                const InVote = vote(schedule, users_id)
                                                console.log("InVote:" + InVote)
                                                pool.query('Select * from poll where poll_id=$1', [poll_id], (error, result2) => {
                                                        if (error)
                                                                return error
                                                        else {
                                                                let mailOptions = {
                                                                        mail: 'meetingplanner1234@gmail.com',
                                                                        to: users_email,
                                                                        subject: 'Invite poll:',
                                                                        text: 'Name poll ' + result2.rows[0].poll_title + '\n Poll location: ' + result2.rows[0].poll_location
                                                                };
                                                                transporter.sendMail(mailOptions, (err, data) => {
                                                                        if (err) {
                                                                                console.log('Error occurs', err);
                                                                        }
                                                                        else {
                                                                                console.log('Email sent!!!');
                                                                                res.status(201).send("Complete")
                                                                        }
                                                                });
                                                        }
                                                })


                                        }
                                        //         console.log("User:"+User)
                                        //         console.log("-------------------Check User --------------------")
                                        //         if (User == false) {
                                        //                 console.log("fail")
                                        //         }
                                        //         else {
                                        //                 console.log("-------------------Check vote --------------------")
                                        //                 const InVote = vote(schedule, user_id)
                                        //                 console.log("InVote:" + InVote)
                                        //                 res.status(201).send("Complete")
                                        //         }
                                        // }
                                })

                        }
                })
}
const checkUser = (poll_id, users_id) => {
        const pu_role = 'user'
        pool.query('Insert into poll_user(poll_id,users_id,pu_role) values ($1,$2,$3)', [poll_id, users_id, pu_role], (error, result4) => {
                if (error)
                        throw error;
                // console.log("Thêm data poll_user: " + result4)
                return true;
        })
}

const vote = (schedule, users_id) => {
        const vote_status = 0;
        // const  dataSchedule = schedule.map(asyncOperation);
        for (let i = 0; i < schedule.length; i++) {
                console.log("-------------" + i + "--------------------")
                pool.query('Insert into vote(schedule_id,users_id,vote_status) values($1,$2,$3)',
                        [schedule[i].schedule_id, users_id, vote_status]
                        , (error, result) => {
                                if (error)
                                        throw error;
                                // console.log(result);
                        })
        }
}
const pollData = (poll_id) => {
        let data;
        pool.query('Select * from poll where poll_id=$1', [poll_id], (error, result) => {
                if (error)
                        return error
                else {
                        console.log("===============================")
                        console.log(result.rows[0])
                        console.log("===============================")
                        data = result.rows[0]
                }
        })
        return data;
}
module.exports = { invite }