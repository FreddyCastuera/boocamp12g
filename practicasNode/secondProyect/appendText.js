const fs = require('fs')
function appendContent(nombre,contenido){
    fs.appendFile(nombre, '\n'+contenido, function (err) {
        if (err) throw err;
        console.log('hemos creado el archivo correctamente');
    }); 
}
appendContent('textos/texto1.txt','mira este es mi segundo parrafo')

