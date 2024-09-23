//Alejandro Navarro Gómez

class alumno {
    constructor(nombre) {
        this._estudiante = nombre
        this._calificacion = []
    }
    subirCalificacion(Cali) {
        this._calificacion.push(Cali)
    }

    mensaje() {
        console.log(`Alumno ${this._estudiante}`);
        this._calificacion.forEach((cali => {
            cali.mostrar()
        }))

    }
}

class califiaciones {
    constructor(materia, maestro, cal1, cali2) {
        this._materia = materia
        this._maestro = maestro
        this._cali1 = cal1
        this._cali2 = cali2
    }
    promedio() {
        return (this._cali1 + this._cali2) / 2
    }
    mostrar() {
        console.log(`
            Materia: ${this._materia.asignatura} 
            Docente: ${this._maestro.nombre}
            Cal1: ${this._cali1}
            Cal2: ${this._cali2}
            Promedio: ${this.promedio()}`);

    }
}

class materia {
    constructor(asignatura) {
        this.asignatura = asignatura
    }
}

class docente {
    constructor(nombre) {
        this.nombre = nombre
    }
}

subirTodo = () => {
    const docent1 = new docente("Jose")
    const docent2 = new docente("Pedro")
    const docent3 = new docente("Juan")

    const materia1 = new materia("Vectorial")
    const materia2 = new materia("Fisica")
    const materia3 = new materia("Datos")

    let alumn1 = new alumno("Dany")
    let alumn2 = new alumno("Luis")

    alumn1.subirCalificacion(new califiaciones(materia1, docent1, 90, 95))
    alumn1.subirCalificacion(new califiaciones(materia2, docent2, 85, 75))
    alumn1.subirCalificacion(new califiaciones(materia3, docent3, 30, 30))

    alumn2.subirCalificacion(new califiaciones(materia1, docent1, 75, 85))
    alumn2.subirCalificacion(new califiaciones(materia2, docent2, 70, 30))
    alumn2.subirCalificacion(new califiaciones(materia3, docent3, 100, 100))

    alumn1.mensaje()
    alumn2.mensaje()
    

}

subirTodo()