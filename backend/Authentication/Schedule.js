const Pool = require('pg').Pool;
const ramdom = require('randomstring')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Captone1',
    password: 'vinhtoan123',
    port: 5432
})
const Schedule = (req, res) => {
    const { users_id, title, location, note, schedule } = req.body;
    const poll_id = ramdom.generate(4) + ramdom.generate(4) + ramdom.generate(4) + ramdom.generate(4);
    pool.query('Insert into poll (poll_id,poll_title,poll_location,poll_note) values  ($1,$2,$3,$4)', [poll_id, title, location, note],
        (error, result) => {
            if (error) {
                console.log("Error : ", error);
                res.status(201).send(`Error : ${error}`)
            }
            else if (result.rowCount === 0) {
                console.log("Failed");
                res.status(201).send(null);
            }
            else {
                // console.log("Success");
                // console.log(result)
                const InsSchedule = InSchedule(schedule, poll_id)
                const PU_Role = 'host';
                pool.query('Insert into Poll_User(poll_id,users_id,PU_Role) values ($1,$2,$3)', [poll_id, users_id, PU_Role],
                    (error, result1) => {
                        if (error)
                            throw error;
                        else {
                            console.log("---------------------Insert poll_user")
                            console.log(result1)
                            if (InsSchedule == true) {
                                console.log("-------------------------------------")
                                pool.query('select schedule_id from Schedule where poll_id=$1', [poll_id],
                                    (error, result3) => {
                                        if (error)
                                            throw error;
                                        else {
                                            console.log(result3)
                                            for (let i = 0; i < result3.rowCount; i++) {
                                                const vote_status = 0;
                                                pool.query('Insert into Vote(schedule_id,users_id,vote_status) values ($1,$2,$3)',
                                                    [result3.rows[i].schedule_id, users_id, vote_status],
                                                    (error, result4) => {
                                                        if (error)
                                                            throw error;
                                                        console.log(result4)
                                                    })
                                            }
                                        }
                                    })
                                res.status(201).send(poll_id)
                            }
                        }
                    })
            }
        })
}
const InSchedule = (schedule, poll_id) => {
    schedule.forEach((element, i) => {
        pool.query('Insert into Schedule(schedule_date,schedule_starttime,schedule_endtime,poll_id) values ($1,$2,$3,$4)',
            [element.date, element.beginTime, element.endTime, poll_id],
            (error, result2) => {
                if (error)
                    throw error;
                else {
                    console.log("---------------------Insert Schedule" + i + "-------------------------")
                    console.log(result2)
                }
            })
    });

    return true;
}

module.exports = { Schedule }