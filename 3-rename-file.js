/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
const fs = require('fs');

fs.renameSync('./backup-files/bird.jpg', './backup-files/pajaro.jpg');