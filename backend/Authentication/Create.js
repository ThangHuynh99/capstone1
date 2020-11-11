const Pool = require('pg').Pool;
const ramdom = require('randomstring')
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const Create = (req, res) => {
        const {users_id,title, location, note } = req.body;
        console.log("-------------------------------");
        console.log(users_id,title,location,note)
        const poll_id= ramdom.generate(4)+ramdom.generate(4)+ramdom.generate(4)+ramdom.generate(4);
        pool.query('Insert into poll (poll_id,poll_title,poll_location,poll_note) values  ($1,$2,$3,$4)' ,[poll_id,title,location,note],
    
        (error, result) => {
            if(error){
                console.log("Error : ",error);
                res.status(201).send(`Error : ${error}`)
            }
            else if(result.rowCount === 0){
                console.log("Failed");
                res.status(201).send(null);
            }
            else{
                // console.log("Success");
                // console.log(result)
                const PU_Role='host';
                pool.query('Insert into Poll_User(poll_id,users_id,PU_Role) values ($1,$2,$3)',[poll_id,users_id,PU_Role],
                (error,result)=>{
                    if(error)
                        throw error;
                    console.log("successful");
                    res.status(201).send(`Successful`);
                })
            }

        })
}
module.exports ={Create};