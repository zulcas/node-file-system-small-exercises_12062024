/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */

const fs = require('fs');
let files = [];

fs.readdir('./backup-files', (err, data)=>{
    if(err){
        console.log('Ha habido un error')
    }
    files = data;
    mostrarArray(files);
    mostrarString(files);
})

async function mostrarArray(files){
    console.log(`Todos los ficheros en formato array: ${files}`);
}
function mostrarString(files){
    files.forEach((element) => {
        console.log(element);
    })
}