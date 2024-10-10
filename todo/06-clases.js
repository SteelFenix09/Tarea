//Definir clases con atributos dentro del constructor

class Perona{
    constructor(nombre,edad,sexo,direccion){
        this._nombre=nombre
        this._edad=edad
        this._sexo=sexo
        this._direccion=direccion
    }
//Metodo saludar
    saludar(){
    }
    //Encapsulamiento setter y getter
    get nombre(){
        return this._nombre
    }
    set nombre(valores){
        this._nombre=valores
    }
}


let persona1 = new Perona("Ale",18,"M","Palenque")
Set:nombre = "ase"
console.log(persona1);
persona1.saludar()
