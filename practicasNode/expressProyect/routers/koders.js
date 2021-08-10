const express = require('express');
const router = express.Router();

//usar metodo de fs read para leer el archivo
const fs = require('fs').promises
router.get('/',async (request, response) => {
    let koders = await fs.readFile('./koders.json','utf-8');
    let objecto = JSON.parse(koders)
    if(Object.keys(request.query).length==2){
        const [nombre,genero,limite] = Object.values(request.query);
        console.log(nombre,genero)
        let filtro = objecto.koders.filter(koder=>{
            return koder.name.includes(nombre) && koder.genero==genero
        });
        response.json(filtro);
        
    }
    else if(Object.keys(request.query).length==1){
        if( Object.keys(request.query)[0]=="nombre"){
            const {nombre,genero,limite} = Object.values(request.query); 
            let filtro = objecto.koders.filter(koder=>koder.name.includes(nombre));
            response.json(filtro);
        }
        if(Object.keys(request.query)[0]=="genero"){
            const {nombre,genero,limite} = Object.values(request.query); 
            console.log(genero);
            let filtro = objecto.koders.filter(koder=>koder.genero == genero);
            response.json(filtro);
        }
    }
    else{
        const {nombre,genero,limite} = Object.values(request.query); 
        response.json(objecto.koders);
    }
})
router.post('/', async (request, response) => {
        let data = await fs.readFile('./koders.json','utf-8');
        const body = request.body;
        let objecto = JSON.parse(data);
        objecto.koders.push(body);
        let objetoString = JSON.stringify(objecto,null,2)
        await fs.writeFile('./koders.json',objetoString);
        let newObject = await fs.readFile('./koders.json','utf-8');
        response.json(JSON.parse(newObject).koders);
})
//sintaxis universal.
router.patch('/:id', async (request,response)=>{
    const {id} = request.params;
    console.log(request.params)
    const {name,generation,genero} = request.body;
    let data = await fs.readFile('./koders.json','utf-8');
    let objecto = JSON.parse(data);
    objecto.koders.forEach(element => {
        if(element.id==parseInt(id)){
            element.name = name;
            element.generation=generation;
            element.genero=genero;
        }
    });
    let objetoString = JSON.stringify(objecto,null,2);
    await fs.writeFile('./koders.json',objetoString);
    let newObject = await fs.readFile('./koders.json','utf-8');
    console.log(newObject)
    response.json(JSON.parse(newObject));
})
router.get('/:id', async (request, response) => {
        const {id} = request.params;
        let archivo = await fs.readFile('./koders.json','utf-8');
        let koders = JSON.parse(archivo).koders
        let koder = koders.filter(item=>item.id==parseInt(id));
        response.json(koder);
    
})
router.delete('/:id', async (request, response) => {
    const {id} = request.params;
    let archivo = await fs.readFile('./koders.json','utf-8');
    let objeto = JSON.parse(archivo);
    let newKoders = objeto.koders.filter(item=>item.id!==parseInt(id));
    objeto.koders = newKoders;
    let newKodersString = JSON.stringify(objeto,null,2)
    await fs.writeFile('./koders.json',newKodersString);
    response.json(objeto);
})

module.exports = router