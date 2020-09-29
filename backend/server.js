const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.listen(port, () => {
    console.log(`Server started on port `, port);
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('<h1>hello world!</h1>'));
// app.post('/login', function (req, res) {
//   var user_name=req.body.email;
//   var password=req.body.password;
//   if(user_name=='admin' && password=='admin'){
//       res.send('success');
//   }
//   else{
//     res.send('Failure');
//   }
// })