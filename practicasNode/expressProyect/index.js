
const express = require('express')
const app = express()
const port = 3000

app.get('/mentors',(req,res)=>{
    res,setStatus(200);
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify('quieres crear un mentor'));
    res.end();
})
app.post('/mentor',(req,res)=>{
    res,setStatus(200);
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({nombre:'ada'}));
    res.end();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})