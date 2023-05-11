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

export const quickSort = async(numbers, onSwap, time) => {
    exception(numbers.length);
    let array = numbers;
    await sortNumbersQuick(array, 0, array.length - 1, onSwap, time);
}

const sortNumbersQuick = async(array, start, finish, onSwap, time) => {
    if (start < finish) {
        let pivot  = await findIndexPivot(array, start, finish, onSwap, time);
        await sortNumbersQuick(array, start, pivot - 1, onSwap, time);
        await sortNumbersQuick(array, pivot + 1, finish, onSwap, time);
    }
}

const findIndexPivot = async(array, start, finish, onSwap, time) => {
    let leftIndex = start;
    let rightIndex = finish;

    while (true)
    {
        while (array[++leftIndex] < array[start])
        {
            if (leftIndex > finish - 1)
            {
                break;
            }
        }

        while (array[rightIndex] > array[start])
        {
            rightIndex--;
            if (rightIndex < leftIndex)
            {
                break;
            }
        }

        if (rightIndex <= leftIndex)
        {
            break;
        }
        await delay(time);
        swap(array, rightIndex, leftIndex);
        onSwap(array);
    }
    await delay(time);
    swap(array, start, rightIndex);
    onSwap(array);
    return rightIndex;
}


export const mergeSort = async(array, onSwap, time) => {
    exception(array.length);
    let tempArray = [array.length];
    await sort(array, tempArray, 0, array.length - 1, onSwap, time);
}

const sort = async(array, tempArray, start, finish, onSwap, time) => {
    if (start < finish) {
        let middleIndex = Math.floor((start + finish) / 2);
        await sort(array, tempArray, start, middleIndex, onSwap, time);
        await sort(array, tempArray, middleIndex + 1, finish, onSwap, time);
        await merge(array, tempArray, start, middleIndex, finish, onSwap, time);
    } 
}

const merge = async(array, tempArray, lowIndex, middleIndex, highIndex, onSwap, time) => {
    let leftIndex = lowIndex;
    let rightIndex = middleIndex + 1;
    let arrayIndex = 0;

    while (leftIndex <= middleIndex && rightIndex <= highIndex)
    {
        if (array[leftIndex] < array[rightIndex])
        {
            tempArray[arrayIndex] = array[leftIndex++];
        }
        else
        {
            tempArray[arrayIndex] = array[rightIndex++];
        }
        arrayIndex++;
    }

    while (leftIndex <= middleIndex)
    {
        tempArray[arrayIndex++] = array[leftIndex++];
    }

    while (rightIndex <= highIndex)
    {
        tempArray[arrayIndex++] = array[rightIndex++];
    }

    for (let i = 0; i < arrayIndex; i++) {
        await delay(time);
        array[lowIndex + i] = tempArray[i];
        onSwap(array);
    }
}
