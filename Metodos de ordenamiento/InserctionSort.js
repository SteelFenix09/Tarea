let datos = [5, 3, 2, 1, 7]

// no recursiva
let inserc = (arn)=>{
    let n = arn.length
    for(let i = 1; i < n ; i++){
        let key = arn[i]
        let j = i - 1
        
        while(j >= 0 && arn[j] > key){
            arn[j + 1] = arn[j]
            j = j - 1
        }
        arn[j + 1] = key
    }
    return arn
}

//console.log(inserc(datos));


// recursividad

let insertSort = (arn, n = arn.length) =>{
    if (n <= 1){
        return arn
    }

    insertSort(arn, n - 1)

    let mas = arn[n - 1]
    let j = n - 2

    while(j >= 0 && arn[j] > mas){
        arn[j + 1] = arn[j]
        j--
    }
    arn[ j + 1] = mas

    return arn
}

console.log(insertSort(datos));
