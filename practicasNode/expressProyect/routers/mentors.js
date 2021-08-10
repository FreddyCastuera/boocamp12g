const express = require('express');
const router = express.Router();

//usar metodo de fs read para leer el archivo
const fs = require('fs').promises
router.get('/',async (request, response) => {
    let mentors = await fs.readFile('./koders.json','utf-8');
    let objecto = JSON.parse(mentors)
    if(Object.keys(request.query).length==2){
        const [nombre,module,limite] = Object.values(request.query);
        console.log(nombre,genero)
        let filtro = objecto.mentors.filter(koder=>{
            return koder.name.includes(nombre) && koder.module==module
        });
        response.json(filtro);
        
    }
    else if(Object.keys(request.query).length==1){
        if( Object.keys(request.query)[0]=="nombre"){
            const {nombre,module,limite} = Object.values(request.query); 
            let filtro = objecto.mentors.filter(koder=>koder.name.includes(nombre));
            response.json(filtro);
        }
        if(Object.keys(request.query)[0]=="module"){
            const {nombre,module,limite} = Object.values(request.query); 
            console.log(module);
            let filtro = objecto.mentors.filter(koder=>koder.module == module);
            response.json(filtro);
        }
    }
    else{
        const {nombre,genero,limite} = Object.values(request.query); 
        response.json(objecto.mentors);
    }
})
router.post('/', async (request, response) => {
        let data = await fs.readFile('./koders.json','utf-8');
        const body = request.body;
        let objecto = JSON.parse(data);
        objecto.mentors.push(body);
        let objetoString = JSON.stringify(objecto,null,2)
        await fs.writeFile('./koders.json',objetoString);
        let newObject = await fs.readFile('./koders.json','utf-8');
        response.json(JSON.parse(newObject).mentors);
})
//sintaxis universal.
router.patch('/:id', async (request,response)=>{
    const {id} = request.params;
    console.log(request.params)
    const {name,module} = request.body;
    let data = await fs.readFile('./koders.json','utf-8');
    let objecto = JSON.parse(data);
    objecto.mentors.forEach(element => {
        if(element.id==parseInt(id)){
            element.name = name;
            element.module = module;
        }
    });
    let objetoString = JSON.stringify(objecto,null,2);
    await fs.writeFile('./koders.json',objetoString);
    let newObject = await fs.readFile('./koders.json','utf-8');
    console.log(newObject)
    response.json(JSON.parse(newObject).mentors);
})
router.get('/:id', async (request, response) => {
        const {id} = request.params;
        let archivo = await fs.readFile('./koders.json','utf-8');
        let mentors = JSON.parse(archivo).mentors
        let mentor = mentors.filter(item=>item.id==parseInt(id));
        response.json(mentor);
    
})
router.delete('/:id', async (request, response) => {
    const {id} = request.params;
    let archivo = await fs.readFile('./koders.json','utf-8');
    let objeto = JSON.parse(archivo);
    let newMentors = objeto.mentors.filter(item=>item.id!==parseInt(id));
    objeto.mentors = newMentors;
    let newMentorsString = JSON.stringify(objeto,null,2)
    await fs.writeFile('./koders.json',newMentorsString);
    response.json(objeto.mentors);
})

module.exports = router