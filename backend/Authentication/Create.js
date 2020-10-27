const Pool = require('pg').Pool;
const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'Captone1',
        password: 'vinhtoan123',
        port: 5432
})
const Create = (req, res) => {
        const { title, location, note } = req.body;
        const user = { title: title, location: location, note: note };
        const user1 = JSON.stringify(user);

        console.log(user1);
}
module.exports ={Create};