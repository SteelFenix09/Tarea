//Alejandro Navarro Gomez

const prompt = require("prompt-sync")()

class Cliente {
    constructor(Membresia, Nombre, Direccion, Telefono, Estado) {
        this._membresia = Membresia;
        this._nombre = Nombre;
        this._direccion = Direccion;
        this._telefono = Telefono;
        this._estado = Estado;
        this._consulta = []
    }

    //Control cliente
    registroCliente() {
        let valorar = parseInt(prompt("Ingrese la cantidad de personas para registrar: "));
        for (let i = 0; i < valorar; i++) {
            this._nombre = prompt("Ingrese su nombre: ");
            //this._membresia = parseInt(prompt("Ingrese el numero de membresia: "));
            //this._direccion = prompt("Ingrese su direccion: ");
            //this._telefono = parseInt(prompt("Ingrese su numero de telefono: "));
            this._estado = prompt(`Cual es tu estado (1. Deudor), (2. libre ) `);
            switch (parseInt(this._estado)) {
                case 1:
                    this._estado = 'Deudor';
                    break;
                case 2:
                    this._estado = 'Libre';
                    break;

            }
            let datos = {
                nombre: this._nombre,
                membresia: this._membresia,
                direccion: this._direccion,
                telefono: this._telefono,
                estado: this._estado
            }
            this._consulta.push(datos)
        }
    }


    eliminarDeudor() {
        for (let i = 0; i < this._consulta.length; i++) {
            if (this._consulta[i].estado === 'Deudor') {
                this._consulta.slice(i, 1);
                console.log(`Cliente ${this._consulta[i].nombre} con membrecia  has sido dado de baja `);

            } else {
                console.log(`Cliente ${this._consulta[i].nombre} con membrecia sin libre de multa `);
            }
        }
    }
}

class cine extends Cliente {
    constructor(Numero, Titulo, Clasificacion, Disponibilidad, Tipo,) {
        super()
        this._numero = Numero
        this._titulo = Titulo
        this._clasificacion = Clasificacion
        this._disponible = Disponibilidad
        this._tipo = Tipo
        this._consultaPeli = []
        this._precioPeli = 0
    }
    // Control peliculas
    consultaPeli() {
        let pelis = parseInt(prompt("Ingrese las peliculas a consultar "));
        for (let i = 0; i < pelis; i++) {
            //this._numero = parseInt(prompt("Ingresa el numero de la peli: "));
            this._titulo = prompt("Ingrese el nombre de la peli : ");
            //this._clasificacion = prompt("Ingrese su clasificacion: ");
            this._disponible = parseInt(prompt("aun hay(1. disponible), (2. Rentato) "));
            switch (parseInt(this._disponible)) {
                case 1:
                    this._disponible = 'Disponible'
                    break
                case 2:
                    this._disponible = 'Rentata'
                    break
            }
            this._tipo = prompt("tipo de peli(3.estreno), (4. catalogo) ")
            switch (parseInt(this._tipo)) {
                case 3:
                    this._tipo = 'Estreno'
                    break
                case 2:
                    this._tipo = 'Catalogo'
                    break
            }
            let varea = {
                numero: this._numero,
                titulo: this._titulo,
                clasi: this._clasificacion,
                dispo: this._disponible,
                tipo: this._tipo
            }
            this._consultaPeli.push(varea)
        }
    }

    eliminarPeli() {
        for (let i = 0; i < this._consultaPeli.length; i++) {
            if (this._consultaPeli[i].dispo === 'Rentata') {
                this._consultaPeli.slice(i, 1);
                // console.log(`La peli ${this._consultaPeli[i].titulo} se ha rentato`);

            } else {
                console.log(`La peli ${this._consultaPeli[i].titulo} aun sigue disponible `);
            }
        }
    }

    renrarPeli(titulo, verif) {
        let cinemax = this._consultaPeli;
        let peliEncontrata = null;
        //console.log("Titulo usuario ", titulo);
        //console.log("Peli array ", cinemax);
        
        for (let i = 0; i < cinemax.length; i++) {
            // console.log("Comparando con ", cinemax[i].titulo);
            if (cinemax[i].titulo === titulo) {
                peliEncontrata = cinemax[i]
                break;
            }
        }
        if (peliEncontrata) {
            if (peliEncontrata.dispo === 'Disponible') {
                let deudorLibre = verif._consulta.some(c => c.estado === 'Deudor')
                if (deudorLibre) {
                    console.log("Salde su deuda");
                } else { 
                if (peliEncontrata.tipo === 'Estreno') {
                    this._precioPeli = 50;
                } else if (peliEncontrata.tipo === 'Catalogo') {
                    this._precioPeli = 35
                }
                let fechaRenta = prompt("Ingrese la fhecha de renta (YYYY-MM-DD)")
                let fechaLimite = this.calcularLimite(fechaRenta)
                peliEncontrata.dispo = 'Rentata';
                peliEncontrata.fechaRenta = fechaRenta;
                peliEncontrata.fechaLimite = fechaLimite;
                console.log(`La peli ${titulo} ha sido rentata`);
                console.log(`Fecha devolucion ${peliEncontrata.fechaRenta}`);
                console.log(`Precio es de $${this._precioPeli}`);
            }
            } else {
                console.log("Peli no disponible");
            }
        }
    }

    calcularLimite(fechaRenta) {
        let fechaLime = new Date(fechaRenta);
        fechaLime.setDate(fechaLime.getDate() + 3);
        return fechaLime.toISOString().slice(0, 10)
    }

    peliRentada(tituloConsu){
        console.log(`Informacion de la plei ${tituloConsu}`);

        let pelis = false

        for(let i= 0; i<this._consultaPeli.length; i++){
            if(this._consultaPeli[i].titulo === tituloConsu){
                pelis = true

                if(this._consultaPeli[i].dispo === 'Rentata'){
                    console.log("Estado: rentado");
                    console.log(`Cliente: ${this._consultaPeli[i].clienteRenta}`);
                    console.log(`Devolucion: ${this._consultaPeli[i].fechaLimite}`);
                    
                }else{
                    console.log("Estado: disponible");
                    
                }
                break
            }
            if(!pelis){
                console.log("No encontrado ");
                
            }
        }
        

    }
}

let clientes = new Cliente();
clientes.registroCliente();
clientes.eliminarDeudor();

let starci = new cine();
starci.consultaPeli();
let titulo = prompt("Ingrese el titulo de la peli a rentar: ")
let verif = clientes
starci.renrarPeli(titulo, verif)
let tituloConsu = prompt("Ingrese el nombre para su estatus de la peli")
starci.peliRentada(tituloConsu)
//starci.eliminarPeli();
//starci.renrarPeli("Titulo de la pelicula")
