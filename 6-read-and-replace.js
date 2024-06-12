/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */

const fs = require('fs');

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    //Leemos fichero
    let finalFileContent = fs.readFileSync(htmlFilePath, 'utf-8');
    let htmlResult = finalFileContent.replaceAll(textToSearch, textToReplace);
    //Creamos fichero write
    fs.writeFileSync('./result.html', htmlResult);

}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
