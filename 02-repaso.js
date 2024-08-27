//Realizar un areglo con 2 dimensiones y guardar dos areglos internos y dar lectura a los datos internos

//Alejandro Navarro Gomez

let cosa = [
    [1, 2, 3], [3, 5, 6]
]

const areglo = () => {
    cosa.map((datos, index) => {
        datos.map((valores, i) => {
            console.log(`${i}=${valores}`);

        })
    })
}



// for of
const ciclo = () => {
    for (let i of cosa) {
        for (let j of i){
            console.log(`${j}`);
            
        }
    }
}
ciclo()
// for each
cosa.forEach(cisco =>{
    cisco.forEach(saske =>{
        console.log(saske);
        
    })
})

// for in
const guardado = () => {
    for(let i in cosa){
        let dado = cosa[i]
        for(let j in dado){
            console.log(`${dado[j]}`);
            
        }
    }
}
guardado()
// funcion flecha
let flecha = () => {
    for(let i=0 ; i < cosa.length ; i++){
    let dados = cosa[i]
    for(let j=0 ; j < dados.length ; j++){
        console.log(dados[j]);
    }
}}
flecha()

// while
let validar = () => {
    let i = 0
    while (i < cosa.length){
        let j = 0
        let dados = cosa[i]
        while (j < dados.length) {
            console.log(`${dados[j]}`);
            j++
        }
        i++
    }
}
validar()


//Estructura de control parser

let a = 4
let b = 5

function Decision() { //funcion definida sin parametros
    /*     if (a>b){
        console.log(`La a es mayor ${a}`);
    } else {
        console.log(`La b es mayor ${b}`);
    } */

    const comprare = a < b ? "A es mayor" : "B es mayor"
    console.log(comprare);

}

//Soy Dany
