//definicion de servidor
const express = require('express');
const server = express();
const kodersRouter = require('./routers/koders');

//middleware

//agregabamos los routers
server.use('/koders',kodersRouter)
module.exports = server

//Requerimiento 
//Endpoint GET /koders.
//1.Asegurarnos que nuestro modelo exista.
//2.Crear el caso de uso necesario.
//3.Crear el endpoint ->

//Endpoint POST /koders.
//Endpoint DELETE /koders/:id