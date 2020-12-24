const Pool = require('pg').Pool;
var md5 = require('md5');
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const register = (req, res) => {
        const { users_email, users_password } = req.body;
        console.log(users_email,users_password)
        try {
                pool.query('Select * from Users where users_email=$1', [users_email], (error, result) => {
                        if (error)
                                throw error;
                        else if (result.rowCount >=1 ) {
                                console.log("Exist")
                                res.status(201).send(`Exist`)
                        }
                        else {
                                pool.query('Insert into Users (users_email ,users_password) values ($1,$2)', [users_email, md5(users_password)],
                                        (error, result1) => {
                                                if (error) {
                                                        console.log("Error : ", error);
                                                        res.status(201).send(`Error : ${error}`)
                                                }
                                                else if (result1.rowCount >= 1) {
                                                        console.log("sucessfull")
                                                        res.status(201).send(`Complete`)
                                                }

                                        })

                        }
                })

        } catch (error) {
                res.status(201).send(`Error : ${error}`)
        }
}
module.exports = { register };