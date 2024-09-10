//Examen

const prompt = require("prompt-sync")()
class Empleado{
    constructor(Nombre, Apellido, Trabajo){
        this._nombre=Nombre;
        this._apellido=Apellido;
        this._trabajo=Trabajo
    }

    saluda(){
        let promedio = 8
        let suedlo = 2500
        let subir = suedlo+(suedlo*0.15)
        if (this._trabajo > promedio) {
            console.log(`Hola ${this._nombre} tu sueldo es de ${subir}`);
        } else {
            console.log(`Hola ${this._nombre} tu sueldo es de ${suedlo}`);

        }
        
    }
}

let persona=()=>{
    let contratar = parseInt(prompt("Cuantso empleados quire consultar"));
    for(let i = 0; i<contratar ; i++){
        let personas = new Empleado(
            prompt(`Ingrese el nombre: `),
            prompt(`Ingrese el apellido: `),
            parseInt(prompt(`Horas trabajadas: `)),
            
            
        )
        personas.saluda()
    }
    
}
persona()

