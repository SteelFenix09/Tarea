// ... (resto de tu código)

class cine extends Cliente {
    // ... (resto de tu código)

    renrarPeli(titulo, cliente) { // Recibimos el objeto cliente como argumento
        let cinemax = this._consultaPeli;
        let peliEncontrata = null;

        for (let i = 0; i < cinemax.length; i++) {
            if (cinemax[i].titulo.trim().toLowerCase() === titulo.trim().toLowerCase()) {
                peliEncontrata = cinemax[i];
                break;
            }
        }

        if (peliEncontrata) {
            if (peliEncontrata.dispo === 'Disponible') {
                // Verificar si el cliente es deudor
                let clienteEsDeudor = cliente._consulta.some(c => c.estado === 'Deudor'); 

                if (clienteEsDeudor) {
                    console.log("Lo siento, no puedes rentar películas hasta que saldes tu deuda.");
                } else {
                    // ... (lógica para calcular el precio)

                    let fechaRenta = prompt("Ingrese la fecha de renta ");
                    let fechaLimite = this.calcularLimite(fechaRenta);

                    peliEncontrata.dispo = 'Rentata';
                    peliEncontrata.fechaRenta = fechaRenta;
                    peliEncontrata.fechaLimite = fechaLimite;

                    console.log(`La peli ${titulo} ha sido rentata`);
                    console.log(`Fecha de devolución: ${peliEncontrata.fechaLimite}`);
                    console.log(`Precio es de $${this._precioPeli}`);
                }

            } else {
                console.log("Peli no disponible");
            }
        } else {
            console.log("No se encontró la película. Por favor, verifique el título e intente nuevamente."); 
        }
    }

    // ... (resto de tu código)
}

// ... (resto de tu código)

// Al llamar a renrarPeli, pasar el objeto clientes como argumento
starci.renrarPeli(tituloUsuario, clientes);