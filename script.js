const numeros = [13, 1, 3, 1, 6, 7, 8]

// Bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let troca = false

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                troca = true
            }
        }

        if (!troca) {
            break
        }
    }

    return arr
}


const nlista = bubbleSort(numeros)

console.log(nlista)


// Merge sort
function merge(arrA, arrB) {
    let arrC = [];

    while (arrA.length > 0 && arrB.length > 0) {
        if (arrA[0] > arrB[0]) {
            arrC.push(arrB.shift());
        } else {
            arrC.push(arrA.shift());
        }
    }

    while (arrA.length > 0) {
        arrC.push(arrA.shift());
    }

    while (arrB.length > 0) {
        arrC.push(arrB.shift());
    }

    return arrC;
}

function mergeSort(arryA) {

    let n = arryA.length

    if (n == 1) {
        return arryA
    }



    let arrayOne = arryA.slice(0, Math.floor(n / 2))

    let arraTwo = arryA.slice(Math.floor((n / 2) + 1), n)

    return merge(arrayOne, arraTwo)
}

const arrayProdutosMergeSort = mergeSort(numeros)
console.log("Merge Sort: " + arrayProdutosMergeSort)


// Quick Sort

function partition(arrayQuickA, low, high) {
    let pivot = arrayQuickA[low]
    let leftwall = low

    for (let i = low + 1; i < high; i++) {
        if (arrayQuickA[i] < pivot) {
            [arrayQuickA[i], arrayQuickA[leftwall]] =
                [arrayQuickA[leftwall], arrayQuickA[i]]
            leftwall++
        }

        
    }

    return leftwall
}

function quickSort(arrayQuickA, low, high) {
    if (low < high) {
        let pivot_location = partition(arrayQuickA, low, high)
        quickSort(arrayQuickA, low, pivot_location)
        quickSort(arrayQuickA, pivot_location + 1, high)
    }

    return arrayQuickA
}

const arrayProdutosQuickSort = quickSort(numeros, 0, numeros.length - 1)
console.log("Array quickSort " + arrayProdutosQuickSort)

