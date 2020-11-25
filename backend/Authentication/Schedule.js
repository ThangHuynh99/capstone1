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
                const PU_Role = 'host';
                pool.query('Insert into Poll_User(poll_id,users_id,PU_Role) values ($1,$2,$3)', [poll_id, users_id, PU_Role],
                    (error, result) => {
                        if (error)
                            throw error;

                        else {
                            schedule.forEach((element,i) => {
                                // console.log("--------------------i----------------")
                                // console.log(element.date,element.beginTime,element.endTime)
                                pool.query('Insert into Schedule(schedule_date,schedule_starttime,schedule_endtime,poll_id) values ($1,$2,$3,$4)',
                                    [element.date, element.beginTime, element.endTime, poll_id],
                                    (error, result )=> {
                                        if (error)
                                            throw error;
                                        else{
                                            console.log(result)
                                        }
                                    })

                            });
                            console.log("-------------------------------------")
                            pool.query('select schedule_id from Schedule where poll_id=$1', [poll_id],
                            (error, result) => {
                                if (error)
                                    throw error;
                                else {
                                    // console.log(result)
                                    result.rows.forEach((result) => {
                                       const  vote_status=0;
                                        pool.query('Insert into Vote(schedule_id,users_id,vote_status) values ($1,$2,$3)',
                                         [result.schedule_id,users_id,vote_status],
                                         (error,result)=>{
                                                if(error)
                                                    throw error;
                                        })
                                        
                                    })
                                    res.status(201).send(poll_id)
                                }
                            })
                        }
                    })
            }

        })

}
module.exports = { Schedule }