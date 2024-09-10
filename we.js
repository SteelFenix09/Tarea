

const prompt = require("prompt-sync")();

let arreglo = []

let informacion;
const datos = () => {
    const dimension = parseInt(prompt("Ingresa el tamanio del arreglo: "));
    for (let i = 0; i < dimension; i++) {
        let nombre = prompt("Ingresa el nombre: ");
        let edad = parseInt(prompt("Ingresa el nombre: "));
        informacion = {
            nombre,
            edad,
        };
        arreglo.push(informacion);
    }

    arreglo.map((precioso) => {
        console.log(
            `El nombre es ${precioso.nombre} y tiene ${precioso.edad} años`
        );
    });

    console.log(arreglo);
};
datos();