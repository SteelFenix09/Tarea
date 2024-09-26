/* // Ordenamiento por Mezcla (Merge Sort)

let margeSort = (ar) => {
    if (ar.length <= 1) {
        return ar
    }

    const mid = Math.floor(ar.length / 2)
    const left = ar.slice(0, mid)
    const right = ar.slice(mid)

    return marge(margeSort(left), margeSort(right))
}

function marge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex])
        leftIndex++
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex])
        rightIndex++
    }

    return result
}

const ar = [7, 5, 9, 2, 1, 7, 6]
const areglo = marge(ar)
console.log(areglo);

 */

function burbuja(ar, n){
    if (n == 1){
        return
    }

    for(let i = 0; i < n-1; i++){
        if(ar[i] > ar[i +1 ]){
            [ar[i], ar[i + 1 ]] = [ar[i + 1], ar[i]]
        }
    }

    burbuja(ar,n -1 )
}

let datos = [ 7, 9, 2, 4, 3, 1]
burbuja(datos, datos.length)
console.log(datos);


