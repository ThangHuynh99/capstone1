const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Captone1',
    password: 'vinhtoan123',
    port: 5432
})

const deleteRoom = (req, res) => {
    const { data, dataSchedule, dataPoll, dataDate } = req.body;
    console.log("-----------------------------------------------")
    // // console.log(data[0].data1)
    // console.log(dataSchedule)
    // console.log(dataPoll)
    // console.log(dataDate)
    const deleteVote1 = deleteVote(data)
    // console.log(dataPoll.poll_id)
    const deleteSchedule1 = deleteSchedule(dataPoll.poll_id)
    const deleteUser1 = deleteUser(dataPoll.poll_id)
    const deletePoll1 = deletePoll(dataPoll.poll_id)
    res.status(201).send("Complete")
    console.log("Complete")

}
const deleteVote = (dataVote) => {
    dataVote.forEach(element => {
        element.data1.forEach((element1) => {
            pool.query('Delete from Vote where vote_id=$1', [element1.vote_id], (error, result) => {
                if (error)
                    return error;
                else {
                    // console.log("---------------------------" + i + "-------------------------")
                    console.log(result)
                }
            })
        })
        return true
    });
}
const deleteSchedule = (poll_id) => {
    pool.query('Delete from schedule where poll_id=$1', [poll_id], (error, result) => {
        if (error)
            return error;
        else {
            // console.log("---------------------------" + i + "-------------------------")
            console.log(result)
        }
    })
    return true
}
const deleteUser = (poll_id) => {
    console.log(poll_id)
    pool.query('Delete from poll_user  where poll_id=$1', [poll_id], (error, result) => {
        if (error)
            return error;
        else {
            // console.log("---------------------------" + i + "-------------------------")
            console.log(result)
        }
    })
    return true
}
const deletePoll = (poll_id) => {
    pool.query('Delete from Poll where poll_id=$1', [poll_id], (error, result) => {
        if (error)
            return error;
        else {
            // console.log("---------------------------" + i + "-------------------------")
            console.log(result)
        }
    })
    return true
}
module.exports = { deleteRoom }