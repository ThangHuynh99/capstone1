const Pool = require('pg').Pool;
const ramdomString = require('randomstring')
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const voting = (req, res) => {
        const { poll_id } = req.body;
        pool.query('select vote.*,users_name  from users, vote,schedule where poll_id=$1 and schedule.schedule_id=vote.schedule_id and users.users_id=vote.users_id order by vote.users_id,schedule.schedule_id',
                [poll_id],
                (error, result) => {
                        if (error)
                                throw error;

                        // pool.query('Select vote.*, schedule.schedule_date , schedule.schedule_starttime , schedule.schedule_endtime from schedule,vote where poll_id=$1 and  schedule.schedule_id=vote.schedule_id')
                        var vote = new Array(3);
                        var user = new Array(3)
                        for (var i = 0; i < vote.length; i++) {
                                var id = result.rows[i * vote.length].users_id;
                                var name = result.rows[i*vote.length].users_name;
                                for (var j = 0; j < vote.length; j++) {
                                        var info = ({
                                                vote_id: result.rows[i * vote.length + j].vote_id,
                                                vote_status: result.rows[i * vote.length + j].vote_status
                                        })
                                        vote[j] = info;
                                }


                                var voting = ({
                                        user_id: id,
                                        user_name:name,
                                        vote1: vote
                                })
                                user[i] = voting;
                        }
                        res.status(201).send(user);
                        console.log("------------------------ViewVote user------------------------------");
                        console.log(user)
                        console.log("-----------------View Schedule-----------------------")
                })
   

}
const voteSchedule = (req,res)=>{
        const {poll_id}=req.body;
        pool.query('Select * from schedule where poll_id=$1 order by schedule_id ASC ', [poll_id], (error, result) => {
                if (error)
                        throw error;
                console.log( result);
                res.status(201).send(result);
        })
}
module.exports = { voting,voteSchedule };