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
    console.log(poll_id)
    pool.query('select * from schedule where poll_id=$1', [poll_id], (error, result) => {
        if (error)
            throw error
        else {
            voteLength = result.rowCount;
            // console.log("----------------voteLength----------------")
            // console.log(voteLength)
            var vote = new Array(voteLength);

            pool.query('select vote.*,users_name  from users, vote,schedule where poll_id=$1 and schedule.schedule_id=vote.schedule_id and users.users_id=vote.users_id order by vote.users_id,schedule.schedule_id',
                [poll_id],
                (error, result) => {
                    const result1 = processData(result, vote);
                    res.status(201).send(result1)


                })

        }
    })
}
const processData = (result, vote) => {
    let user = new Array();
    let voteReal = vote;
    for (let i = 0; i < voteReal.length; i++) {
        let id = result.rows[i * voteReal.length].users_id;
        let name = result.rows[i * voteReal.length].users_name;
        let votePro = new Array();
        for (let j = 0; j < voteReal.length; j++) {
            let info = ({
                vote_id: result.rows[i * voteReal.length + j].vote_id,
                vote_status: result.rows[i * voteReal.length + j].vote_status
            });
            votePro.push(info);
        }
        let voting = ({
            user_id: id,
            user_name: name,
            vote1: votePro
        });
        user.push(voting);
    }
    return user;
}
const voteSchedule = (req, res) => {
    const { poll_id } = req.body;
    console.log(poll_id)
    pool.query('Select * from schedule where poll_id=$1 order by schedule_id ASC ', [poll_id], (error, result) => {
        if (error)
            throw error;
        console.log(result);
        res.status(201).send(result);
    })
}
const submitVote = (req, res) => {
    const user = req.body;
    // let user1=JSON.parse(user)
    // console.log("---------------------------------------------")
    // console.log(user)
    user.forEach(element => {
        pool.query('Update vote set vote_status =$1 where vote_id=$2 ', [element.vote_status, element.vote_id], (error, result) => {
            if (error)
                throw error
            console.log()
        })
    });
    res.status(201).send("complete")
    // user.Array(element=>{
    //     console.log(element)
    // })
}
module.exports = { voting, voteSchedule, submitVote };