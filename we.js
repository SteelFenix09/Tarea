/* function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Caso base: un array de longitud 0 o 1 ya está ordenado
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Agregar los elementos restantes de la mitad izquierda, si los hay
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Agregar los elementos restantes de la mitad derecha, si los hay
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Ejemplo de uso
const arr = [12, 11, 13, 5, 6, 7];
const sortedArr = mergeSort(arr);
console.log("Lista ordenada:", sortedArr); */

function ordenamientoBurbujaRecursivo(arr, n) {
    // Caso base: Si el arreglo tiene solo un elemento (o ninguno), ya está ordenado
    if (n == 1) {
        return;
    }

    // Una pasada del ordenamiento de burbuja
    for (let i = 0; i < n - 1; i++) {
        // Comparamos elementos adyacentes y los intercambiamos si están en el orden incorrecto
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    // Llamada recursiva para ordenar los elementos restantes (excluyendo el último, que ya está en su posición final)
    ordenamientoBurbujaRecursivo(arr, n - 1);
}

// Ejemplo de uso
let numeros = [5, 1, 4, 2, 8];
ordenamientoBurbujaRecursivo(numeros, numeros.length);
console.log(numeros); // Salida: [1, 2, 4, 5, 8]