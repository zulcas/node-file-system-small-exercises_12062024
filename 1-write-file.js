/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 * 
 */
const fs = require('fs');

fs.writeFileSync('./text.txt', 'Hello World!', (err) =>{
    if(err){
        console.log("Error al escribir el fichero");
    }
})