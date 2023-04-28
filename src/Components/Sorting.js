const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
} 

const swap = (array, firstElement, secondElement) => {
    let temp = array[firstElement] 
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}

export const bubbleSort = async (numbers, onSwap, time) => {
    let array = numbers;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                await delay(time);
                swap(array, j, j + 1)
                onSwap(array);
            }
        }
    }
}

