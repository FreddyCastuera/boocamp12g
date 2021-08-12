const express = require('express');
const router = express.Router();


router.use((req,res,next)=>{
    console.log('middleware en el router de koders');
    next();
})
router.get('/',(req,res)=>{
    res.end()
})

router.post('/',(req,res)=>{
    res.end()
})



module.exports = router;