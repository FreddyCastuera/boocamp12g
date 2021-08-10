const mongoose = require('mongoose');
const DB_USER = "jorgeCastuera";
const DB_PASSWORD = "megamanzeroaxlx1";
const DB_HOST = "cluster0.omvx8.mongodb.net";
const DB_NAME = "kodemia";
//Schema 
const koderSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:50,
        require:true,
        trim:true
    },
    lastName:{
        type:String,
        minLength:2,
        maxLength:50,
        require:true,
        trim:true
    },
    age:{
        type:Number,
        min:0,
        max:90,
        require:true,
        
    },
    gender:{
        type:String,
        enum:['m','f'],
        require:true
    }
})
//model
const Koder = mongoose.model('koders',koderSchema);


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async (connection)=>{
        console.log('azoputamadre DB Connected');
        console.log(connection)
       /*const koders = await Koder.find({})
        console.log(koders);*/
        const koderCreated = await Koder.create({name:"Alfred",lastName:"Pizana",age:27,gender:"m"})
        console.log(koderCreated);
    })
    .catch(err=>console.log(err))
    
