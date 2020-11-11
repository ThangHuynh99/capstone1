const { Variant } = require('mssql');

const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const dashboard = (req, res) => {
        var {users_id} =req.body;
        pool.query('select DISTINCT users_id, (select count(users_id) as Participants from poll_user where poll_id=PO.poll_id),(select count(schedule_id) as Option from schedule where schedule.poll_id=PO.poll_id ), PU_role, PO.* from poll_user PU,Poll PO  where PU.users_id=$1 And PU.poll_id=PO.poll_id ORDER BY poll_date ASC',
                [users_id],
                (error, result) => {
                        if (error)
                                throw error
                        console.log(result);
                        res.status(201).send(result);

                })
}
module.exports = { dashboard };