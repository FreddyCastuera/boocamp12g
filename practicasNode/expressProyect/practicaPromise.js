const { json } = require('express')
const express = require('express')
//tener acceso al server - instanciar express
const server = express()
// middleware : lo que llegue en el body lo va a parsear en un objeto json
// para que sepa que vamos a enviar objetos de js
server.use(express.json())
//usar metodo de fs read para leer el archivo
const fs = require('fs').promises
const fsN = require('fs')

// función promificada para leer un archivo
function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fsN.readFile(pathToRead, 'utf8', (err, content) => {
            if (err) {
                reject(err)
            }else {
                const json = JSON.parse(content)
                resolve(json)
            }
        })
    })
}



server.get('/koders', (request, response) => {
    const archivo = fs.readFile('./koders.json','utf-8')
    archivo
    .then((data)=>{
        response.json(JSON.parse(data).koders);
    })
    .catch((err)=>{console.log(err)})
})
server.post('/koders', (request, response) => {
    const archivo = fs.readFile('./koders.json','utf-8')
    archivo.then((data)=>{
        const body = request.body;
        console.log('body:', body);
        let objecto = JSON.parse(data);
        objecto.koders.push(body);
        let objetoString = JSON.stringify(objecto,null,2)
        fs.writeFile('./koders.json',objetoString);
        return fs.readFile('./koders.json','utf-8');
    })
    .then((data)=>{
        response.json(JSON.parse(data))
    })
    .catch((err)=>{console.log(err)})
})

server.get('/mentors', (request, response) => {
    const archivo = fs.readFile('./koders.json','utf-8')
    archivo
    .then((data)=>{
        response.json(JSON.parse(data).mentors);
    })
    .catch((err)=>{console.log(err)})
})
server.post('/mentors', (request, response) => {
    const archivo = fs.readFile('./koders.json','utf-8')
    archivo.then((data)=>{
        const body = request.body;
        console.log('body:', body);
        let objecto = JSON.parse(data);
        objecto.mentors.push(body);
        let objetoString = JSON.stringify(objecto,null,2)
        fs.writeFile('./koders.json',objetoString);
        return fs.readFile('./koders.json','utf-8');
    })
    .then((data)=>{
        response.json(JSON.parse(data))
    })
    .catch((err)=>{console.log(err)})
})

server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})