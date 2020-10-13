const Pool=require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'Captone1',
    password : 'vinhtoan123', 
    port : 5432
})
const register = (req,res)=>{
        const {id,password}=req.body;
        try{
                pool.query('Insert into Users (users_id ,users_password) values ($1,$2)',[id,password],
                (error,result)=>{
                        if(error){
                                console.log("Error : ",error);
                                res.status(201).send(`Error : ${error}`)
                        }
                        else if(result.rowCount>= 1){
                                console.log("sucessfull")
                                res.status(201).send(`Complete`)
                        }
                })

        }catch(error){
                res.status(201).send(`Error : ${error}` )
        }
}
module.exports={register};