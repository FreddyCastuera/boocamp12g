const fs = require('fs')

function createDir(nombre){
    fs.mkdir(nombre ,(err) => {
        if (err) {
            return console.error(err);
        }
        console.log('hemos creado el directorio correctamente');
    });
}
createDir('textos')