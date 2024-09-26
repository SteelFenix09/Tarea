let  datos = [5, 3, 2, 1, 7]
// no recursiva
let merge = (arn)=>{
    let respaldo = [...arn]
    let recorido = arn.length

    while (recorido > 1){
        for(let izquierda = 0; izquierda < recorido - 1; izquierda++){
            if (respaldo[izquierda] > respaldo[izquierda +1 ]){
                [respaldo[izquierda], respaldo[izquierda + 1]] = [respaldo[izquierda + 1], respaldo[izquierda]]
            }
        }
        recorido --
    }
    return respaldo
}
//console.log(merge(datos));

// recurvidad
let margeSort = (arn) =>{
    if (arn.length <= 1) {
        return arn
    }

    let guardar = Math.floor(arn.length / 2)
    let izquierda = arn.slice(0 , guardar)
    let derecha = arn.slice(guardar)

    return margeSor(margeSort(izquierda), margeSort(derecha))
}

let margeSor = (izquierda, derecha) =>{
    let reultado = []
    let inIzquierda = 0
    let inDerecha = 0

    while(inIzquierda < izquierda.length && inDerecha < derecha.length){
        if(izquierda[inIzquierda] < derecha[inDerecha]){
            reultado.push(izquierda[inIzquierda])
            inIzquierda ++
        } else {
            reultado.push(derecha[inDerecha])
            inDerecha ++
        }
    }
    
    return reultado.concat(izquierda.slice(inIzquierda)).concat(derecha.slice(inDerecha))
}

console.log(margeSort(datos));
