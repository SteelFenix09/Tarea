const prompt = require("prompt-sync")();

class Cooperativa {
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

    agregarEmpleados() {
        let cantidad = parseInt(prompt("Cantidad de empleados a dar alta: "));
        for (let i = 0; i < cantidad; i++) {
            this._nombre = prompt("Ingrese su nombre: ");
            this._apellido = prompt("Ingrese su apellido: ");
            this._rfc = prompt("Ingrese su RFC: ");
            this._direccion = prompt("Ingrese su dirección: ");
            this._telefono = parseInt(prompt("Ingrese su número de teléfono: "));
            this._horas = parseInt(prompt("Ingrese las horas trabajadas: "));
            this._costoHora = parseFloat(prompt("Ingrese su sueldo por hora: "));

            let empleado = {
                nombre: this._nombre,
                apellido: this._apellido,
                rfc: this._rfc,
                direccion: this._direccion,
                telefono: this._telefono,
                horas: this._horas,
                costoHora: this._costoHora,
                sueldo: this.calcularSueldo(),
            };
            this._agregar.push(empleado);
        }
    }

    calcularSueldo() {
        if (this._horas > 8) {
            return this._sueldo = (this._costoHora * this._horas) + ((this._costoHora * this._horas) * 0.15);
        } else {
            return this._sueldo = this._costoHora * this._horas;
        }
    }

    eliminar() {
        if (this._agregar.length > 0) {
            this._agregar.pop();
        } else {
            console.log(`No ha registrado nada`);
        }
    }

    mostrarEmpleados() {
        if (this._agregar.length > 0) {
            this._agregar.forEach((emp) => {
                console.log(`El empleado ${emp.nombre} ${emp.apellido} tiene un sueldo de ${emp.sueldo}`);
            });
        } else {
            console.log("No hay empleados que mostrar");
        }
    }
}

let cooperativa = new Cooperativa();
cooperativa.agregarEmpleados();
cooperativa.mostrarEmpleados();
cooperativa.eliminar();