const prompt = require("prompt-sync")()


class Persona {
    constructor(nombre, edad, sexo, direccion, telefono) {
        this._nombre = nombre
        this._edad = edad
        this._sexo = sexo
        this._direccion = direccion
        this._telefono = telefono
        this._guardar = []
    }

    Almacen() {
        this._guardar.forEach((mvp) => {
            console.log(`Hola ${mvp.nombre}, tienes ${mvp.edad}, del genero ${mvp.sexo}
            vives en ${mvp.direccion} y tu numero telofonico es ${mvp.telefono}`);
        })


    }

    Datos() {
        let total = 3

        for (let i = 0; i <= total; i++) {
            this._nombre = prompt("Ingrese su nombre ")
            this._edad = parseInt(prompt("Ingrese su edad "))
            this._sexo = prompt("Ingrese su genero ")
            this._direccion = prompt("Ingrese su direccion ")
            this._telefono = parseInt(prompt("Ingrese su numero telefonico "))

            let cosas = {
                nombre: this._nombre,
                edad: this._edad,
                sexo: this._sexo,
                direccion: this._direccion,
                telefono: this._telefono
            }
            this._guardar.push(cosas)
        }

    }
}

let otro = new Persona()
otro.Datos()
otro.Almacen()