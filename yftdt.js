// Función para hacer el heapify de un subárbol en un índice i
function heapify(arr, n, i) {
    let largest = i; // Inicializar el nodo más grande como raíz
    let left = 2 * i + 1; // Hijo izquierdo
    let right = 2 * i + 2; // Hijo derecho

    // Si el hijo izquierdo es más grande que la raíz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Si el hijo derecho es más grande que el nodo más grande encontrado hasta ahora
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Si el nodo más grande no es la raíz
    if (largest !== i) {
        // Intercambiar el nodo más grande con la raíz
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursivamente aplicar heapify en el subárbol afectado
        heapify(arr, n, largest);
    }
}

// Función principal para el HeapSort
function heapSort(arr) {
    let n = arr.length;

    // Construir el heap (reorganizar el array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extraer uno por uno los elementos del heap
    for (let i = n - 1; i > 0; i--) {
        // Mover la raíz actual al final
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Llamar recursivamente a heapify en el heap reducido
        heapify(arr, i, 0);
    }

    return arr;
}

// Ejemplo de uso
let arr = [12, 11, 13, 5, 6, 7];
console.log("Array ordenado:", heapSort(arr));
