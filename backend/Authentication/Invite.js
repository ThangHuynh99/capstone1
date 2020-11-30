const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
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
                        else if(result.rowCount===0){
                                res.status(201).send("not exist")
                        }
                        else if (result.rowCount >= 1) {
                                console.log(result)
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
                                                res.status(201).send("Complete")
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
module.exports = { invite }