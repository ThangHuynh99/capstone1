const express = require('express');
const app = express();
const sql = require('mssql/msnodesqlv8');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const pool = new sql.ConnectionPool({
        database: 'Meetinplaner',
        server: 'VOSTRO-3568T\\SQLEXPRESS',
        driver: 'msnodesqlv8',
        options: {
                trustedConnection: true
        }
})
const checkLogin = (req, res) => {
        const { id, password } = req.body;
        console.log("id:" +id +"password:"+password)
        // console.log('SELECT * FROM Users WHERE Users_Id = $1  AND Users_Password =$2 ',[id,password])
        pool.connect()
                .then(() => {
                        try {
                                pool.request().query('SELECT * FROM Users WHERE Users_Id = $1  AND Users_Password =$2 ', [id, password],
                                        (error, result) => {
                                                console.log(result);
                                                if (error) {
                                                        console.log("Error : ", error);
                                                        res.status(201).send(`Error : ${error}`)
                                                }
                                                else if (result.rowCount === 0) {
                                                        console.log("Failed");
                                                        res.status(201).send(null);
                                                }
                                                else {
                                                        console.log("Success");
                                                        console.log(result)
                                                        res.status(201).send(result.rows[0]);
                                                }

                                        })
                        }
                        catch (error) {
                                res.status(201).send(`Error : ${error}`);
                                console.log(error);
                        }
                })
}
module.exports={checkLogin};