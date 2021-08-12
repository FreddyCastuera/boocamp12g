const express = require('express');
const server = express();
const routerKoders = require('./routerKoders');

server.use('/',(req,res,next)=>{
    console.log('MiddleWare a nivel de aplicacion');
    next();
})
server.use('/koders',routerKoders);
server.get('/',(req,res)=>{
    res.end();
})

server.listen(8080,()=>{
    console.log('lanzamos el servidor en el puerto 8080')
})
