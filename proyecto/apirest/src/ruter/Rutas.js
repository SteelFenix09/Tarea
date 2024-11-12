import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ACHAS from '../componentes/Opciones/ACHAS'
import Productos from '../componentes/Opciones/Productos'
import Recomendaciones from '../componentes/Opciones/Recomendaciones.js'
import Cali from '../componentes/Calificaciones/Cali.js'

function Rutas() {
    return (
        <Routes>
            <Route path='/achas' element={<ACHAS/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/calificacion' element={<Cali/>}/>
            <Route path='/Recomendaciones' element={<Recomendaciones/>}/>
        </Routes>
    )
}


export default Rutas