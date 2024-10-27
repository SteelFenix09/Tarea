import React from 'react'
import Propiedades2 from './Propiedades2'

function Propiedades(props) {
    const {nombre,valor1,valor2,cosas,constante} = props
    const apellidos = "Gomez"
    console.log(constante);
    
    //console.log(props);
    
    return (
        <div>Propiedades
            <h1>Propiedad 1 : {nombre}</h1>
            <h1>Propiedad 2 : {valor1}</h1>
            <h1>Propiedad 3 : {valor2}</h1>
            <h1>Propiedad 4 : {constante}</h1>

            <h2>Suma: {valor1 + valor2}</h2>
            <h2>Producto: {valor1*valor2}</h2>
            <Propiedades2 apellido={apellidos}/>
        </div>
    )
}

export default Propiedades