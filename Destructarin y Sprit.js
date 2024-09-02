

// Destructaring

/* const persona = {
    nombre : "Ale",
    edad : 18,
    sexo : "Hombre"
} */
/* 
let{ nombre,edad,sexo}=persona

console.log(nombre,sexo);
 */
/* 
let nombre,edad,sexo

({ nombre,edad,sexo}=persona)

console.log(nombre,sexo);
 */
/* 
const persona = {
    nombre : "Ale",
    edad : 18,
    sexo : "Hombre"
}

let{ ...datos}=persona //crea una copia del objeto natural

datos.nombre="Juan"

console.log(datos.nombre);
 */
/* 
const persona = {
    nombre : "Ale",
    edad : 18,
    sexo : "Hombre"
}

let{ nombre:name}=persona 


console.log(name);
 */

const persona = {
    control: "23e",
    nombre : "Ale",
    edad : 18,
    sexo : "Hombre"
}

let nombre, edad
({ nombre,edad,...info}=persona )


console.log(info.control);
