import React, { useState } from 'react'

function Estados() {
    const [valor, setValor] = useState(0)
    const agregarValor = () => {
        /*  console.log("Incrementa valor") */
        setValor(valor + 1)

    }
    return (
        <div>Estados
            <h1>Agregar valor {valor}</h1>
            <button onClick={agregarValor}> Incrementar </button>
        </div>
    )
}

export default Estados