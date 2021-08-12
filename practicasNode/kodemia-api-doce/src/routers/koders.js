const express = require('express');
const router = express.Router();
const Koders = require('../usecases/koders');


router.use(express.json());
router.get('/',async (request,response)=>{
    try{
        const allKoders = await Koders.getAll();
        response.json({
            success:true,
            message:'All Koders',
            data:{
                koders:allKoders
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al obtener los coders',
                error:error.message
            })
        }
})

router.post('/',async (request,response)=>{
    try{
        const koder = await Koders.createKoder(request.body);
        response.json({
            success:true,
            message:'Koder creado',
            data:{
                koders:koder
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al crear al koder',
                error:error.message
            })
        }
})
router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params;
        const koderDeleted = await Koders.deleteKoder(id);
        response.json({
            success:true,
            message:'Koder eliminado',
            data:{
                koders:koderDeleted
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al eliminar al koder',
                error:error.message
            })
        }
})






module.exports = router