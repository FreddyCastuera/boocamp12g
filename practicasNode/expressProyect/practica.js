const { json } = require('express')
const express = require('express')

const server = express()

server.use(express.json())

const fs = require('fs')

server.get('/koders', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    response.setHeader('Content-Type', 'application/json')
    response.status(200).json(JSON.parse(archivo).koders);
    response.end()
})

server.post('/koders', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    const body = request.body
    let objecto = JSON.parse(archivo);
    objecto.koders.push(body);
    let objetoString = JSON.stringify(objecto);
    fs.writeFileSync('./koders.json',objetoString);
    response.status(200).json({
        message: 'aqui se crea un koder'
    })
})

server.get('/mentors', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    response.setHeader('Content-Type', 'application/json')
    response.status(200).json(JSON.parse(archivo).mentors);
    response.end()
})

server.post('/mentors', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    const body = request.body
    let objecto = JSON.parse(archivo);
    objecto.mentors.push(body);
    let objetoString = JSON.stringify(objecto);
    fs.writeFileSync('./koders.json',objetoString);
    response.status(200).json({
        message: 'aqui se crea un mentor'
    })
})

server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})