let datos = [5, 3, 2, 1, 7]

// No recursiva
let radiz = (arn) => {
    let maximo = Math.max(...arn).toString().length
    for(let digito = 1; digito <= maximo; digito++){
        let cos = Array(10).fill(0).map(() => [])
        for(let i = 0 ; i < arn.length; i++){
            let valua = Math.floor((arn[i] / Math.pow(10, digito - 1)) % 10)
            cos[valua].push(arn[i])
        }
        arn = []
        for(let i = 0; i < cos.length; i++){
            arn = arn.concat(...cos[i])
        }
    }
    return arn
}

console.log(radiz(datos));
