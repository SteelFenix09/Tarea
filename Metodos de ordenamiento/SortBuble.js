let datos = [5,3,2,1,7]

function burbu(l){
    let n = datos.length
    for(i = 0; i < n - 1; i++){
        for(j = 0; j < n - i -1; j++){
            if(l[j] > l[j+1]){
                let cambio = l[j]
                l[j] = l[j+1]
                l[j+1] = cambio
            }
        }
    }
    return l
}

const  orden = burbu(datos)
//console.log(orden);

function burbuja(ar,n){
    if(n == 1){
        return
    }

    for(let i = 0; i < n - 1; i++){
        if(ar[i] > ar[i + 1]){
            [ar[i], ar[i + 1]] = [ar[i+1], ar[i]]
        }
    }

    burbuja(ar,n - 1)
}
burbuja(datos, datos.length)
console.log(datos);
