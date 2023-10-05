
//multiplicar proyecto parcial Antony Ralon 
const fs = require('fs');
const colors = require('colors');

const quitarColores = (texto) => {
    // Expresión regular para eliminar los códigos de colores ANSI
    const expresionRegular = /\x1b\[[0-9;]*m/g;
    return texto.replace(expresionRegular, '');
  };


const crearArchivo = async(base = 5, hasta = 10, listar=false )=>{
    const encabezado=
`
 ${'===================='.green}
    ${'  Tabla del:'.green} ${ colors.blue(base)}
 ${'===================='.green}`
    try {
        
        let salida ='' 
        for(let i = 1; i<= hasta ; i++){
            const espacios=()=> {
                if(base * i<= 9 && i <= 9){return`      |`}
                else if(base * i<= 9 && i <= 99){return`      |`}
                else if(base * i<= 99 && i <= 9){return`     |`}
                else if(base * i<= 99 && i <= 99){return`    |`}
                else if (base * i<=999 && i <= 9){return`    |`}
                else if (base * i<=999 && i <= 99){return`   |`}
                else  {return`  |`}
            }
            salida += `\n|   ${base} ${'x'.green} ${i} ${'='.green} ${base * i} `+ espacios()
            }
        if(listar){
            console.log(encabezado)
             console.log(salida);
        }
 const impresion = encabezado +'\n'+ salida          
            fs.writeFileSync(`salida/tabla-${base}.txt`, quitarColores(impresion))
            return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
}
//ignore los if anidados XD son para que se vea bonito 
module.exports ={
    crearArchivo
}