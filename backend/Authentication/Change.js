const e = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const changePassword = (req, res) => {
        const { users_email, users_password } = req.body;
        pool.query('Select * from Users where users_email = $1', [users_email], (error, result) => {
                if (error) {
                        res.status(201).send(`Error: ` + error)
                }
                else if (result.row === 0) {
                        console.log(result)
                        res.status(201).send(`not exist`)
                }
                else {
                        pool.query('Update Users set users_email=$1 where users_password=$2', [users_email, users_password], (error, result) => {
                                if (error) {
                                        console.log(error);
                                        res.status(201).send(`Error: ` + error)
                                }
                                else {
                                        console.log(result);
                                        console.log('Successful');
                                        res.status(201).send(`Successful`);
                                }
                        })
                }
        })
}
module.exports = { changePassword }