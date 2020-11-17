const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const invite = (req, res) => {
        var { user_email, poll_id } = req.body;
        pool.query('Select * from Users where user_email=$1 ',
                [user_email],
                (error, result) => {
                        if (error)
                                throw error
                        else if (result.rowCount >= 1) {
                                var user_id = result.rows[0].user_id
                                var pu_role = 'user'
                                pool.query('Insert into Users (poll_id,user_id,pu_role)  values ($1,$2,$3)',
                                        [poll_id, user_id, pu_role],
                                        (error, result) => {
                                                if (error)
                                                        throw error;
                                                else {
                                                        console.log(result)
                                                        res.status(201).send("Complete")
                                                }

                                        }
                                )
                        }
                })
}
module.exports = { invite }