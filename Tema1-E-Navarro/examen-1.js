//Examen

const prompt = require("prompt-sync")()
class Empleado{
    constructor(Nombre, Apellido, RFC, Direccion, Telefono){
        this._nombre=Nombre;
        this._apellido=Apellido;
        this._rfc=RFC;
        this._direccion=Direccion;
        this._telefono=Telefono;
    }

    saluda(){
        console.log(`Hola ${this._nombre} 
            ${this._apellido} tus datos son, RFC
            ${this._rfc}, tu direccion ${this._direccion}, tu numero telefonico
            ${this._telefono}  `);
    }
}

let persona=()=>{
    let contratar = parseInt(prompt("Cuantidad de empleado para consultar"));
    for(let i = 0; i<contratar ; i++){
        let personas = new Empleado(
            prompt(`Ingrese el nombre: `),
            prompt(`Ingrese el apellido: `),
            (prompt(`Ingrse su RFC: `)),
            prompt(`Ingrese su direccion: `),
            parseInt(prompt(`Ingrese su numero telefonico: `))
            
        )
        console.log(personas);
        personas.saluda()
    }
    
}
persona()
