const Pool = require('pg').Pool;
var moment = require('moment');
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
    pool.query("select * from poll where poll_id=$1", [poll_id], (error, result) => {
        if (error)
            throw error
        else {
            const dataPoll = result.rows[0]
            pool.query('select * from schedule where poll_id=$1', [poll_id], (error, result) => {
                if (error)
                    throw error;
                else {
                    const dataSchedule = result;
                    let dataDate = new Array()
                    result.rows.forEach(element => {
                        // console.log(element.schedule_date)
                        let moment1 = moment(element.schedule_date.toString()).utcOffset(element.schedule_date.toString())
                        console.log(moment1.format('DD/MM/YYYY'))
                        const date1=({date:moment1.format('DD/MM/YYYY')})
                        dataDate.push(date1)
                    })
                    console.log(dataDate)
                    pool.query('select users.* from users, poll_user where poll_id=$1 and users.users_id=poll_user.users_id', [poll_id], (error, result) => {
                        if (error)
                            throw error
                        else {
                            const dataUser = result;
                            pool.query('Select Vote.* from Vote,Schedule where poll_id=$1 and Vote.schedule_id=Schedule.schedule_id', [poll_id], (error, result) => {
                                if (error)
                                    throw error;
                                else {
                                    const data = processData(result.rows, dataUser, dataSchedule);
                                    console.log(data)
                                    res.status(201).send({ data, dataSchedule, dataPoll,dataDate })
                                }
                            })
                        }
                    })

                }
            })
        }
    })
}
// const pollData =(poll_id)=>{
//     pool.query('Select * from poll where poll_id=$1',[poll_id],(error,result)=>{
//         if(error)
//         throw error;

//     })
// }
const processData = (result, dataUser, dataSchedule) => {
    let user = new Array();
    for (let i = 0; i < dataUser.rowCount; i++) {
        let id = dataUser.rows[i].users_id;
        let name = dataUser.rows[i].users_name;
        let votePro = new Array();
        for (let j = 0; j < dataSchedule.rowCount; j++) {
            const data = vote(dataSchedule.rows[j].schedule_id, dataUser.rows[i].users_id, result)
            votePro.push(data);
        }
        let voting = ({
            user_id: id,
            user_name: name,
            data1: votePro
        });
        user.push(voting);
    }
    return user;
}
const vote = (schedule_id, users_id, result) => {
    schedule_id = schedule_id.toString()
    users_id = users_id.toString()
    let data1 = new Array()
    result.forEach(element => {
        const users1 = element.users_id
        const schedule1 = element.schedule_id
        if (schedule1 === schedule_id && users1 === users_id) {
            data1 = {
                vote_id: element.vote_id,
                vote_status: element.vote_status
            }
        }
    })
    return data1;
}

const submitVote = (req, res) => {
    const user = req.body;
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
const deleteUser = (req, res) => {
    const { user, poll_id } = req.body;
    const user_id = user.user_id
    // console.log(poll_id)
    user.data1.forEach(element => {
        pool.query('delete from vote where vote_id=$1',
            [element.vote_id],
            (error, result) => {
                if (error)
                    throw error;
                else {
                    console.log(result)
                }
            })
    })
    pool.query('delete from poll_user where poll_id=$1 and users_id=$2',
        [poll_id, user_id],
        (error, result1) => {
            if (error)
                throw error;
            else {
                console.log(result1)
            }
        })
    res.status(400).send("complete")
}
const FinalOption = (req, res) => {
    const { poll_id } = req.body
    console.log(poll_id)
    const poll_status = 0
    pool.query('Update poll set poll_status = $1 where poll_id=$2 ',
        [poll_status, poll_id],
        (error, result) => {
            if (error)
                throw error;
            else if (result.rowCount >= 1) {
                res.status(201).send("Complete")
            }
        })
}
module.exports = { voting, submitVote, deleteUser, FinalOption };