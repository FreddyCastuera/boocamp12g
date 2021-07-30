const fs = require('fs')
function createFile(nombre,contenido){
    fs.writeFile(nombre, contenido="", function (err) {
        if (err) throw err;
        console.log('hemos creado el archivo correctamente');
    }); 
}
createFile('textos/texto1.txt','mira este es mi contendio')