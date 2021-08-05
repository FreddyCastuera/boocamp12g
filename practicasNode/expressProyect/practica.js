const { json } = require('express')
const express = require('express')

//tener acceso al server - instanciar express
const server = express()


// middleware : lo que llegue en el body lo va a parsear en un objeto json
// para que sepa que vamos a enviar objetos de js
server.use(express.json())

/*server.get('/mentors', (request, response) => {
    response.setHeader('Content-Type', 'application/json')

    let mentorObj = {name:'Israel', lastName: 'Salinas'}

    response.write(JSON.stringify(mentorObj))
    response.end()
})

server.post('/mentors', (request, response) => {
//     response.setHeader('Content-Type', 'application/json')

//     let mentorObj = {name:'charles', lastName: 'Babbage'}

//     response.write(JSON.stringify(mentorObj))
//     response.end()
response.json({
    name:'charles', 
    lastName: 'Babbage'
})
})

server.post('/koders', (request, response) => {

    const body = request.body
    console.log('body:', body)

    response.json({
        message: 'aqui se crea un koder'
    })


})

server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})*/


// GET mentors -> que regrese un string
// POST mentors -> que regrese otro string

//leer archivo koders.json y regresar los koders desde un metodo get
//

//usar metodo de fs read para leer el archivo
const fs = require('fs')




server.get('/koders', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    response.setHeader('Content-Type', 'application/json')
    response.status(200).json(JSON.parse(archivo));
    response.end()
})

server.post('/koders', (request, response) => {
    const archivo = fs.readFileSync('./koders.json','utf-8')
    const body = request.body
    console.log('body:', body)
    let objecto = JSON.parse(archivo);
    objecto.koders.push(body);
    let objetoString = JSON.stringify(objecto)
    fs.writeFileSync('./koders.json',objetoString);

    console.log(objecto['koders'])
    response.status(200).json({
        message: 'aqui se crea un koder'
    })
})

server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})