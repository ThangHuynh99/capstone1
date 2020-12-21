const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const ViewUser =(req,res)=>{
        pool.query('Select * from Users',(error,result)=>{
                if(error){
                        throw error;
                }
                else{
                res.status(200).send(result.rows);
                }
        })
}
const ViewPoll= (req,res)=>{
        pool.query('select * from Poll',(error,result)=>{
                if(error)
                        throw error;
                res.status(200).send(result.rows);
        })
}
module.exports={ViewUser,ViewPoll}