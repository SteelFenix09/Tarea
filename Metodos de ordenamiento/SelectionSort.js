let datos = [5, 3, 2, 1, 7]

// no recurva
let selection = (arn) => {
    let n = arn.length

    for (let i = 0; i < n - 1; i++) {
        let parametro = i
        for (let j = i + 1; j < n; j++) {
            if (arn[j] < arn[parametro]) {
                parametro = j
            }
        }

        if (parametro !== i) {
            [arn[i], arn[parametro]] = [arn[parametro], arn[i]]
        }
    }

    return arn
}
//console.log(selection(datos));


// recursiva

let selectionSort = (arn, indice = 0) => {
    if (indice >= arn.length - 1) {
        return arn
    }

    let parametro = indice
    for(let i = indice + 1; i < arn.length ; i++){
        if(arn[i] < arn[parametro]){
            parametro = i
        }
    }

    if(parametro !== indice){
        [arn[indice], arn[parametro]] = [arn[parametro], arn[indice]]
    }
    return selectionSort(arn, indice + 1)
}

console.log(selectionSort(datos));
