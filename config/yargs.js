

//yargs proyecto parcial Antony Ralon 
const argv = require('yargs')
                    .option('b', {
                        alias: 'base', 
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias: 'hasta', 
                        type: 'number',
                        demandOption: true,
                        describe: 'Es el numero de veces a iterar de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar', 
                        type: 'boolean',
                        demandOption: true,
                        describe: 'Muestra la tabla en consola'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que se un numero'
                        }
                        return true
                    })
                    .argv

    module.exports = argv;