const express = require('express');

const app = express();

const port = 3400;

app.get('/login', (req,res) =>{
    res.send('<h1>Welocome to Login Page</h1>')
})

app.get('/', (req,res) =>{
    res.send('<h1>Welocome to Express Server</h1>')
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is up and running on port : ${port}`);  
})