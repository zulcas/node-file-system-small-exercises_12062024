/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */
const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, data) =>{
    console.log(data);
})