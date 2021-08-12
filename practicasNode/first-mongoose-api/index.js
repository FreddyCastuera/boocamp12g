const express = require('express');
const server = express();

const mongoose = require('mongoose');
const DB_USER = "jorgeCastuera";
const DB_PASSWORD = "megamanzeroaxlx1";
const DB_HOST = "cluster0.omvx8.mongodb.net";
const DB_NAME = "kodemia";

const Koder = require('./koderModel.js')

server.use(express.json())
server.get('/',(request,response)=>{
    response.json({
        message:'API with mongoose'
    })
})
//GET /koders?gender=m&age=23, filtros por diferentes campos
server.get('/koders',async (request,response)=>{
    console.log(request.query);
    //desestructuramos el request.query
    let koders = await Koder.find({...request.query})
    console.log(koders)
    response.json({
        succes:true,
        message:'koders of DB',
        data:{
            koders
        }
    })
})
//POST /koders
server.post('/koders',async (request,response)=>{
    try{
        console.log(request.body)
        const koderCreated = await Koder.create(request.body)
        console.log(koderCreated);
        response.json({
            succes:true,
            message:'posteamos un koder',
            data:{
                koders:koderCreated
            }
        })
    }
    catch(err){
        response.status(400).json({
            succes:false,
            message:erro.message
        })
        console.log(err)
    }
})
//PATCH /koders:id
server.patch('/koders/:id',async (request,response)=>{
    const {id} = request.params;
    const _id = mongoose.Types.ObjectId(id);
    console.log(_id);
    try{
        let koder = await Koder.updateOne({_id:_id},request.body)
        response.json({
            succes:true,
            message:'modificamos un koder',
            data:{
                koder
            }
        })
    }
    catch(err){
        console.log(err)
    }

})
//DELETE /koders:id
server.delete('/koders/:id',async (request,response)=>{
    const {id} = request.params;
    const _id = mongoose.Types.ObjectId(id);
    console.log(_id);
    await Koder.deleteOne({_id:_id})
    let koders = await Koder.find({})
    response.json({
        succes:true,
        message:'eliminamos un koder',
        data:{
            koders
        }
    })
})


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((connection)=>{
        console.log('azoputamadre DB Connected');
        console.log(connection)
        //montamos el servidor
        server.listen(8080,()=>{
            console.log("Server listening");
        })
            
    })
    .catch(err=>console.log(err))







