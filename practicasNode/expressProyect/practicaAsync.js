const { json } = require('express')
const express = require('express')
//tener acceso al server - instanciar express
const server = express()
// middleware : lo que llegue en el body lo va a parsear en un objeto json
// para que sepa que vamos a enviar objetos de js
server.use(express.json())
//usar metodo de fs read para leer el archivo
const fs = require('fs').promises
server.get('/koders', (request, response) => {
    const bringFile = async ()=>{
        let koders = await fs.readFile('./koders.json','utf-8');
        response.json(JSON.parse(koders));
    }
    bringFile();
})
server.post('/koders', (request, response) => {
    const bringObject = async () =>{
        let data = await fs.readFile('./koders.json','utf-8');
        const body = request.body;
        console.log('body:', body);
        let objecto = JSON.parse(data);
        objecto.koders.push(body);
        let objetoString = JSON.stringify(objecto)
        await fs.writeFile('./koders.json',objetoString);
        return fs.readFile('./koders.json','utf-8');
    }
    const sendObject = async () =>{
        let newObject = await bringObject();
        response.json(JSON.parse(newObject));
    }
    sendObject();
})

server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})