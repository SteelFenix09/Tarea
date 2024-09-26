let datos = [5, 3, 2, 1, 7]

let sortQuieck = (arn) => {
    let conteniod = [];
    conteniod.push(0);
    conteniod.push(arn.length - 1);

    while (conteniod.length > 0) {
        let alto = conteniod.pop();
        let bajo = conteniod.pop();

        let pivote = parti(arn, bajo, alto);

        if (pivote - 1 > bajo) {
            conteniod.push(bajo);
            conteniod.push(pivote - 1);
        }

        if (pivote + 1 < alto) {
            conteniod.push(pivote + 1);
            conteniod.push(alto);
        }
    }

    return arn;
}

let parti = (arn, bajo, alto) => {
    let pivote = arn[alto];
    let i = (bajo - 1);

    for (let j = bajo; j <= alto - 1; j++) {
        if (arn[j] < pivote) {
            i++
            [arn[i], arn[j]] = [arn[j], arn[i]]
        }
    }
    [arn[i + 1], arn[alto]] = [arn[alto], arn[i + 1]]
    return (i + 1)
}

//console.log(sortQuieck(datos));



let quieck = (arn) => {
    if (arn.length <= 1) {
        return arn
    }

    let pivot = arn[0]
    let izquierda = []
    let derecha = []

    for (let i = 1; i < arn.length; i++) {
        if (arn[i] < pivot) {
            izquierda.push(arn[i])
        } else {
            derecha.push(arn[i])
        }
    }
    return quieck(izquierda).concat(pivot, quieck(derecha))
}
let ordenado = quieck(datos)
console.log(ordenado);
