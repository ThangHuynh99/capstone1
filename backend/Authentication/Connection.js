const Pool=require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'Capstone1',
    password : '172304', 
    port : 5432
})

module.exports={connection};