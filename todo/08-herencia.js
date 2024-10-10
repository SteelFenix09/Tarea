//Regla sintaxis

class Persona {
    constructor(Nombre,Apellido,Edad,Sexo,Direccion,Correo,Telefono,Horario){
        this._nombre = Nombre;
        this._apellido = Apellido;
        this._edad = Edad;
        this._sexo = Sexo;
        this._direccion = Direccion;
        this._correo = Correo;
        this._telefono = Telefono;
        this._horario = Horario
    }
}

class Alumnos extends Persona{ 
    constructor(nombre,Carera,Semestre){
        super(nombre)
       // this._matricula = Matricula;
        this._carrera = Carera;
        this._semestre = Semestre;
    }
    mensaje(){
        console.log(`Soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
        
    }
}

let alumno = new Alumnos("Alejandro","Derecho",3)
alumno.mensaje()