class Perona {
    
    constructor(nombre, apellido, edad,matricula,telefono) {
        this._nombre = nombre = 
        this._apellido = apellido
        this._edad = edad
        this._matricula = matricula
        this._telefono = telefono
    }
    saludar() {
        console.log(`Hola ${this._nombre} ${this._apellido} tines ${this._edad} con matricula ${this._matricula} y su numero ${this._telefono}`);

    }

   
}



let persona1 = new Perona("Ale","Navarro",18,"23e20",919145)
persona1.saludar()
