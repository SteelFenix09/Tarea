const prompt = require("prompt-sync")()

let arreglo = []; // Inicializamos el array

datos = () => {
    let mano = parseInt(prompt("Ingrse el tamaño: "));
    
    for (let i = 0; i < mano; i++) {
        let nombre = prompt(`Ingrese su nombre: `);
        let edad = parseInt(prompt(`Su edad: `));
        
        arreglo.push([nombre, edad]); // Agregamos un objeto con el nombre y la edad al array
    }
    
    arreglo.forEach((sop) => { 
        console.log(`El nombre ${sop} y la edad ${sop}`); 
    });
    
    console.log(arreglo);
};

datos();