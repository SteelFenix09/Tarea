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

    get nombre(){
        return this._nombre
    }
    set nombre(name){
        this._nombre = name
    }

    get apellido(){
        return this._apellido
    }
    set apellido(last){
        this._apellido = last
    }

    get papel (){
        return this._rfc
    }

    set papel (papel){
        this._rfc = papel
    }

    get direccion (){
        return this._direccion
    }
    set direccion (ubicacion){
        this._direccion = ubicacion
    }

    get numero(){
        return this._telefono
    }
    set numero(movil){
        this._telefono = movil
    }

    saluda(){
        console.log(`Hola ${this._nombre} ${this._apellido} tus datos son, RFC ${this._rfc}, tu direccion ${this._direccion}, tu numero telefonico ${this._telefono}  `);
    }
}

let persona=()=>{
    let contratar = parseInt(prompt("Cuantidad de empleado para consultar "));
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
