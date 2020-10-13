const Pool=require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'Captone1',
    password : 'vinhtoan123', 
    port : 5432
})

const checkLogin = (req, res) => {
        const {id, password} = req.body;
        try{
            pool.query('SELECT * FROM Users WHERE users_id = $1 and users_password=$2' ,[id,password],
    
                        (error, result) => {
                            console.log(result);
                            if(error){
                                console.log("Error : ",error);
                                res.status(201).send(`Error : ${error}`)
                            }
                            else if(result.rowCount === 0){
                                console.log("Failed");
                                res.status(201).send(`null`);
                            }
                            else{
                                console.log("Success");
                                console.log(result)
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