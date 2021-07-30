const fs = require('fs')
function deleteDir(nombre){
    fs.rmdir(nombre,{recursive:true}, function (err) {
        if (err) throw err;
        console.log('hemos eliminado el directorio correctamente');
    }); 
}
deleteDir('textos')