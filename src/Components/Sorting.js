export const shuffleElements = (array, onSwap) => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * i);
        swap(array, j, i);
    }
    onSwap(array);
}

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
} 

const swap = (array, firstElement, secondElement) => {
    let temp = array[firstElement] 
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}

const exception = (amountElements) => {
    if (amountElements == 0) {
        throw new Error("Array is empty");
    }
}

export const bubbleSort = async (numbers, onSwap, time) => {
    exception(numbers.length);
    let array = numbers;

    for (let i = 0; i < array.length; i++) {
        let elementsSwapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                await delay(time);
                swap(array, j, j + 1)
                onSwap(array);
                elementsSwapped = true;
            }
        }
        let isArraySorted = elementsSwapped === false;
        if (isArraySorted) {
            break;
        }
    }
}

export const insertionSort = async (numbers, onSwap, time) => {
    exception(numbers.length);
    let array = numbers;
    
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j - 1] > array[j]) {
                await delay(time);
                swap(array, j, j - 1);
                onSwap(array);
            }
            else break;
        }
    }
}

export const selectionSort = async(numbers, onSwap, time) =>{
    exception(numbers.length);
    let array = numbers;

    for (let i = 0; i < array.length - 1; i++) {
        let indexWithSmallestNumber = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexWithSmallestNumber]) {
                indexWithSmallestNumber = j;
            }
        }
        if (indexWithSmallestNumber != i) {
            await delay(time);
            swap(array, indexWithSmallestNumber, i);
            onSwap(array);
        }
    }
}
