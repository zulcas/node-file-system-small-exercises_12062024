/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

const fs = require('fs');

fs.rmSync('./backup-files/borrame.txt');