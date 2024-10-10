//Factury funtion
/* 
const PErsona = {
    Nombre: "Ale",
    Edad: 18
} */

function datosPersona(nombre, edad) {
    return {
        nombre,
        edad,
        active: true
    }
}

let persona1 = datosPersona("Ale",18)
let persona2 = datosPersona("Chucho",19)

//console.log(persona1,persona2);
//Camel Case
const datosUsuario={
    nombre:"Ale",
    edad: 18,
    pasword : 32e20123,
    direccion :{
        colonia : "El palenque",
        calle : "Francisco",
        noEx : 43
    },
    sueldo : 214.04,
    guardarUsuario:function(){
        console.log("Guardando");
    }
}

//datosUsuario.guardarUsuario()

//Add registros y parametros a los objetos definidos
const user={id:1}
user.nombre = "Ale"
user.guardarUser = function(){
    console.log("Guardando");
    
}

/* console.log(user);
user.guardarUser() */

//objetos definidos
//const person =Object.freeze ({id:1, nombre:"ale"})
const person =Object.seal ({id:1, nombre:"ale"})

person.edad = "17"
person.id = 2
person.nombre="ase"

//console.log(person);
//Pasar funcion como parametros

function mor(nombre){
    this.nombre=nombre
}

function morar(Fn,argumento){
    return new Fn(argumento)
}

let mosar=morar(mor,"Ayaka")
console.log(mosar);
