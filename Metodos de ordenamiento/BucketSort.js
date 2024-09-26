let datos = [5, 3, 2, 1, 7]

// no recurvidad

let bucket =(arn, cubo = 5) =>{
    if(arn.length === 0) return []

    let minimo = Math.min(...arn)
    let maximo = Math.max(...arn)
    let cubosContar = Math.floor((maximo - minimo) / cubo) + 1
    let cubos = Array(cubosContar).fill(0).map(()=>[])

    for(let i = 0; i < arn.length; i++){
        let cubosIndice = Math.floor((arn[i] - minimo) / cubo)
        cubos[cubosIndice].push(arn[i])
    }

    let devolver = cubos.map((sub) => sub.sort((a,b)=>a-b))
    return devolver.reduce((ac, sub) => ac.concat(...sub), [])
}

//console.log(bucket(datos));

// recursiva

let bucketSort = (arn) =>{
    if (arn.length <= 1){
        return arn
    }

    let minimo = Math.min(...arn)
    let maximo = Math.max(...arn)

    let cuboNum = arn.length
    let cubos = new Array(cuboNum).fill(null).map(() => [])

    let rango = maximo - minimo
    arn.forEach(nu => {
        let indice = Math.floor((nu - minimo) / rango * (cuboNum - 1))
        cubos[indice].push(nu)
    });

    cubos = cubos.map(cus => bucketSort(cus))

    let areglo = []
    cubos.forEach(cus => areglo.push(...cus))

    return areglo
}

console.log(bucketSort(datos));
