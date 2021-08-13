const Koder = require('../models/koders.js');
const mongoose = require('mongoose');
function getAll(){
    return Koder.find();
}
function create(koder){
    return Koder.create(koder);
}
function deleteById(id){
    return Koder.findByIdAndDelete(id)
}
function updateById(id,newData){
    return Koder.findByIdAndUpdate(id,newData,{new:true})
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}