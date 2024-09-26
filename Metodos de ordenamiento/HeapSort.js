let datos = [5, 3, 2, 1, 7]


//no recursiva

function heap(arn) {
    let n = arn.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        passs(arn, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arn[0], arn[i]] = [arn[i], arn[0]];
        passs(arn, i, 0);
    }
}
function passs(arr, n, i) {
    let largo = i; 
    let l = 2 * i + 1; 
    let r = 2 * i + 2; 
    if (l < n && arr[l] > arr[largo]) {
        largo = l;
    }
    if (r < n && arr[r] > arr[largo]) {
        largo = r;
    }
    if (largo !== i) {
        [arr[i], arr[largo]] = [arr[largo], arr[i]];
        passs(arr, n, largo);
    }
}
heap(datos)
//console.log(datos);

// Recursiva

let heapSort = (arn, n, i) =>{
    let largo = i
    let izquierda = 2 * i + 1
    let derecha = 2 * i +2

    if(izquierda < n && arn[izquierda] > arn[largo]){
        largo = izquierda
    }

    if(derecha < n && arn[derecha] > arn[largo]){
        largo = derecha
    }

    if(largo !== i){
        [arn[i], arn[largo]] = [arn[largo], arn[i]]
        heapSort(arn, n, largo)
    }
}

let ha = (arn) =>{
    let n = arn.length

    for(let i = Math.floor(n / 2 ) - 1; i >= 0; i--){
        heapSort(arn, n, i)
    }

    for(let i = n - 1; i > 0; i--){
        [arn[0], arn[i]] = [arn[i], arn[0]]
        heapSort(arn, i, 0)
    }
    return(arn)
}

console.log(ha(datos));

