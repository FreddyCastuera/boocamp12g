const fs = require('fs')
function deleteFile(nombre,contenido){
    fs.unlink(nombre, function (err) {
        if (err) throw err;
        console.log('hemos eliminado el archivo correctamente');
    }); 
}
deleteFile('textos/texto1.txt')