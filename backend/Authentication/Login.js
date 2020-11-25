const Pool=require('pg').Pool;
var md5 = require('md5');
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'Captone1',
    password : 'vinhtoan123', 
    port : 5432
})

const checkLogin = (req, res) => {
        const {user_email,user_password} = req.body;
        console.log(user_email,user_password);
        console.log(md5(user_password));
        try{
            pool.query('SELECT * FROM Users WHERE users_email = $1 and users_password=$2' ,[user_email,md5(user_password)],
    
                        (error, result) => {
                            console.log(result);
                            if(error){
                                console.log("Error : ",error);
                                res.status(201).send(`Error : ${error}`)
                            }
                            else if(result.rowCount === 0){
                                console.log("Failed");
                                res.status(201).send(null);
                            }
                            else{
                                console.log("Success");
                                console.log(result.rows[0].users_id);
                                res.status(201).send(result.rows[0]);
                            }
    
                        })
        }
        catch(error){
            res.status(201).send(`Error : ${error}`);
            console.log(error);
        }
    }
module.exports = { checkLogin };