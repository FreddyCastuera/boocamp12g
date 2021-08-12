const express = require('express');
const server = express();

//middleware a nivel de aplicacion//
server.use( (request,response,next) => {
    console.log('middleware de aplicacion');
    next();
})
server.get('/',(req,res)=>{
    res.json({
        message:'hola koders'
    })
})


server.listen(8081,()=>{
    console.log('el servidor esta corriendo');
})

