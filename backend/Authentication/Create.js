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
        const {title, location, note } = req.body;
        console.log(title,location,note)
        const poll_id= ramdom.generate(4)+ramdom.generate(4)+ramdom.generate(4)+ramdom.generate(4);
        pool.query('Insert into poll (poll_id,poll_title,poll_location,poll_note) values  ($1,$2,$3,$4)' ,[poll_id,title,location,note],
    
        (error, result) => {
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
            }

        })
}
module.exports ={Create};