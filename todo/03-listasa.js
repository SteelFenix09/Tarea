//Crear una lista con diferentes tipos de datos
let datos = [{
    nombre: "Alejandro",
    apellido: "Navarro ",
    edad: 18,
    estudiante: false
},
{
    nombre: "Dany",
    apellido: "Cambrano ",
    edad: 35,
    estudiante: true
}
]
let arreglos = ["Alejandro", 18, true]


let info = () => {
    /* for ( let arr in arreglos)
        console.log(`${arr} : ${arreglos[arr]}`);
        */

    /*   for (let lista in datos){
          console.log(`${lista} : ${datos[lista]}`);
          
      } */

    /*let valora = Object.values(datos)
    valora.map((data,index) => {
        console.log(`${data}`);
        
    })
     */

    /* let index = 0
    for(let i of valora){
        console.log(`${index}:${i}`);
        index ++
    } */
    /* let valora = Object.entries(datos)
    for (let i of valora) {
        console.log(i);

    } */

    // entrar y que de los valores
    /* Object.entries(datos).forEach (([key,value]) => {
        console.log(` ${key} :     ${value}`);
        
    }) */

    /* for (let i in datos){
        let ale = datos[i]
        for( let j in ale){
            console.log(ale[j]);
            
        }
    } */

    //facil y es accecible
    datos.map((cosa)=>{
        console.log(`Su nombre es ${cosa.nombre} y tiene ${cosa.edad}`);
        
    })
}


info()