/* const prompt = require("prompt-sync")()

let num1 
let num2

num1 = parseInt(prompt("Ingrese le numero 1:"))
num2 = parseInt(prompt("Ingrse el numero 2:"))

console.log(num1*num2);
 */

/* /realizar un programa que contenga un arreglo indefinido, 
en el que solicite a travez del teclado el tamaño y se ingrese
por lo menos 4 valores con cualquier tipo, utilizando un ciclo 
para ingresar los datos, imprime los valores */

const prompt = require("prompt-sync")()


let num = () => {

    /*let mano = parseInt(prompt("Ingrse el tamaño: "))

     for(let i=0 ; i< mano; i++){
        let map = parseInt(prompt(`Ingrese los numero para la poscion ${i}: `))
        datos.push(map)
        
    }
    console.log("Los numeros son: ");
    for(let num in datos){
        console.log(num);
        
    }
     */

}

let inormacion = [];
let datos = () => {
    let mano = parseInt(prompt("Ingrse el tamaño: "))
    for (let i = 0; i < mano; i++) {
        let nombre = (prompt(`Ingrese su nombre: `))
        let edad = parseInt(prompt(`Su edad: `))
        
        inormacion.push([nombre,edad])
    }
    inormacion.map((sop => {
        console.log(
            `El nombre ${sop.nombre} y la edad ${sop.edad}`
        );

    }))
    console.log(inormacion);

}
datos()