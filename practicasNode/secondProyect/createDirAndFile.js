const fs = require('fs')
function createDirAndFile(nombreDir,callback,nombreArchivo){
    fs.mkdir(nombreDir ,(err) => {
        if (err) {
            return console.error(err);
        }
        console.log('hemos creado el directorio correctamente');
        callback(nombreDir+'/'+nombreArchivo)
    });
}
function createFile(nombre,contenido){
    fs.writeFile(nombre, contenido="contenido aleatorio", function (err) {
        if (err) throw err;
        console.log('hemos creado el archivo correctamente');
    }); 
}
createDirAndFile('newDir',createFile,'newFile.txt')