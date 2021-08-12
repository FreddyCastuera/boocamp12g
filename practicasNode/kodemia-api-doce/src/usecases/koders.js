const Koder = require('../models/koders.js');
const mongoose = require('mongoose');
function getAll(){
    return Koder.find();
}
function createKoder(koder){
    return Koder.create(koder);
}
function deleteKoder(id){
    const _id = mongoose.Types.ObjectId(id);
    return Koder.deleteOne({_id})
}

module.exports = {
    getAll,
    createKoder,
    deleteKoder
}