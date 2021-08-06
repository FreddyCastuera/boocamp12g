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
//sintaxis universal.
server.patch('/koders/:id',(request,response)=>{
    const {id} = request.params;
    console.log(request.params)
    const {name,generation} = request.body;
    const bringObject = async () =>{
        let data = await fs.readFile('./koders.json','utf-8');
        let objecto = JSON.parse(data);
        console.log(data);
        objecto.koders.forEach(element => {
            if(element.id==parseInt(id)){
                element.name = name;
                element.generation=generation
            }
        });

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
server.get('/koders/:id', (request, response) => {
    const bringFile = async ()=>{
        const {id} = request.params;
        let archivo = await fs.readFile('./koders.json','utf-8');
        let koders = JSON.parse(archivo).koders
        let koder = koders.filter(item=>item.id==parseInt(id));
        response.json(koder);
    }
    bringFile();
})
server.delete('/koders/:id', (request, response) => {
    const bringFile = async ()=>{
        const {id} = request.params;
        let archivo = await fs.readFile('./koders.json','utf-8');
        let json = JSON.parse(archivo)
        console.log(json);
        let newKoders = json.koders.filter(item=>item.id!==parseInt(id));
        json.koders = newKoders;
        let newKodersString = JSON.stringify(json)
        await fs.writeFile('./koders.json',newKodersString);
        response.json(json);
    }
    bringFile();
})




server.listen(8080, () => {
    console.log('listening on port localhost: 8080')
})