// Evaluacion
const prompt = require("prompt-sync")();

class Coperativa {
    constructor(Nombre, Apellido, RFC, Direccion, Telefono, Horas, costoHora) {
        this._nombre = Nombre;
        this._apellido = Apellido;
        this._rfc = RFC;
        this._direccion = Direccion;
        this._telefono = Telefono;
        this._agregar = [];
        this._sueldo = 0;
        this._horas = Horas;
        this._costoHora = costoHora;
    }
    //getter
    //setter

    //Dentro es un metodo y fuera de la class es Funcion
    agregarEmple() {
        let tamaño = parseInt(prompt("Cantidad de empleados a dar alta: "));
        for (let i = 0; i < tamaño; i++) {
            this._nombre = prompt("Ingrese su nombre: ");
            this._apellido = prompt("Ingrese su apellido: ");
            this._rfc = prompt("Ingrese su RFC: ");
            this._direccion = prompt("Ingrese su Direccion: ");
            this._telefono = parseInt(prompt("Ingrese su numero de telefono: "));
            this._horas = parseInt(prompt("Ingrese las horas trabajadas: "));
            this._costoHora = parseFloat(prompt("Ingrese su sueldo por hora: "));

            let empleados = {
                nombre: this._nombre,
                apellido: this._apellido,
                rfc: this._rfc,
                direccion: this._direccion,
                telefono: this._telefono,
                horas: this._horas,
                costoHora: this._costoHora,
                sueldo: this.calcularSueldo()
            }
            this._agregar.push(empleados)
        }
    }


    calcularSueldo() {
        if (this._horas > 8) {
            this._sueldo = this._costoHora * this._horas;
            return this._sueldo = this._sueldo + (this._sueldo * 0.15)
        } else {
            return this._sueldo = this._costoHora * this._horas
        }
    }

    eliminar() {
        //this._agregar.pop()
        this._agregar.length > 0 ? this._agregar.pop() : console.log(`No ha registrado nada`);
    }

    mostrarEmpleado() {
        this._agregar.length > 0 ? this._agregar.map((emp) => {
            console.log(`El nombre es ${emp.nombre} y tiene un sueldo ${emp.sueldo}`);

        }) : console.log("No hay empleados que mostrar");
    }


}

let empleados = new Coperativa();
empleados.agregarEmple();
empleados.mostrarEmpleado();
empleados.eliminar();

//empleados.menuLista()

 /*   menuLista() {
        let lista1 = parseInt(prompt("Que decea hacer: 1. agregar, 2. mostrar, 3. eliminar, 4. salir " ))
        while (lista1 != 4) {
            switch (lista1) {
                case 1:
                    this.agregarEmple()
                    break;
                case 2:
                    this.mostrarEmpleado();
                    break;
                case 3:
                    this.eliminar();
                    break;
                case 4:
                    break;
            }
        }
    }  */