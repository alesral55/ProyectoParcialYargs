//app proyecto parcial Antony Ralon 
//prueba dos 

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
console.clear();

console.log(argv);

    crearArchivo(argv.b,argv.h ,argv.l)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch(error => console.log(error))