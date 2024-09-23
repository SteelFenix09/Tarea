class Calificaciones {
    constructor(calificacion) {
        this._calificacion = calificacion;
    }

    imprimirCalificacion() {
        console.log("Calificación: " + this._calificacion);
    }
}

class Materia {
    constructor(nombre, maestro) {
        this._nombre = nombre;
        this._maestro = maestro;
        this._calificaciones = [];
    }
    
    subirCalificacion(calificacion) {
        this._calificaciones.push(calificacion);
    }

    imprimirCalificaciones() {
        console.log("Calificaciones de " + this._nombre + ":");
        this._calificaciones.forEach((calificacion) => {
            console.log(" - " + calificacion._calificacion);
        });
    }

    imprimirInfo() {
        console.log("Materia: " + this._nombre);
        console.log("Maestro: " + this._maestro);
    }
}

class Alumno {
    constructor(nombre, control) {
        this._nombre = nombre;
        this._control = control;
        this._materias = [];
    }

    agregarMateria(materia) {
        this._materias.push(materia);
    }

    imprimirMaterias() {
        console.log("Materias de " + this._nombre + ":");
        this._materias.forEach((materia) => {
            console.log(" - " + materia._nombre);
        });
    }

    imprimirInfo() {
        console.log("Control: " + this._control);
        console.log("Nombre: " + this._nombre);
    }
}

class Maestro {
    constructor(nombre) {
        this._nombre = nombre;
    }

    imprimirInfo() {
        console.log("Nombre: " + this._nombre);
    }
}

class Promedio {
    constructor(materias) {
        this._materias = materias;
    }

    calcularPromedio() {
        let suma = 0;
        let contador = 0;
        this._materias.forEach((materia) => {
            materia._calificaciones.forEach((calificacion) => {
                suma += parseFloat(calificacion._calificacion);
                contador++;
            });
        });
        return (suma / contador).toFixed(2);
    }
}

// Creación de instancias
let maestro = new Maestro("Profesor X");
let vectorial = new Materia("Vectorial", maestro);
let fisica = new Materia("Fisica", maestro);

let cali1v = new Calificaciones(9);
let cali2v = new Calificaciones(8.5);
let cali3v = new Calificaciones(10);

vectorial.subirCalificacion(cali1v);
vectorial.subirCalificacion(cali2v);
vectorial.subirCalificacion(cali3v);

let cali1f = new Calificaciones(7);
let cali2f = new Calificaciones(6);
let cali3f = new Calificaciones(8);

fisica.subirCalificacion(cali1f);
fisica.subirCalificacion(cali2f);
fisica.subirCalificacion(cali3f);

let alumno1 = new Alumno("Ale Navarro", "23e20126");
alumno1.agregarMateria(vectorial);
alumno1.agregarMateria(fisica);

// Llamadas a métodos imprimir
console.log(`Alumno ${alumno1._nombre} con control "${alumno1._control}" tiene calificaciones:`);
vectorial.imprimirInfo();
vectorial.imprimirCalificaciones();

fisica.imprimirInfo();
fisica.imprimirCalificaciones();

let promedioVectorial = new Promedio([vectorial]);
let promedioFisica = new Promedio([fisica]);

console.log(`Promedio de ${vectorial._nombre}: ${promedioVectorial.calcularPromedio()}`);
console.log(`Promedio de ${fisica._nombre}: ${promedioFisica.calcularPromedio()}`);