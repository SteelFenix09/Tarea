import React from 'react'

function Formulario() {
    return (
        <form>
            <label for="Nombre">Nombre: </label>
            <input type='text' name='nombre' placeholder='Escribir el nombre'></input>
            <br></br>
            <label for="Apellido">Apellido: </label>
            <input type='text' name='apellido' placeholder='Escribir el apellido'></input>
        </form>
    )
}

export default Formulario