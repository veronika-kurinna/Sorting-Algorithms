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


export const mergeSort = (numbers) => {
    exception(numbers.length);
    let array = numbers;

    if (array.length <= 1) {
        return;
    }

    let middle = Math.ceil(array.length / 2);
    let leftArray = [middle];
    let rightArray = [array.length - middle];

    for (let i = 0; i < middle; i++) {
        leftArray[i] = array[i];
    }

    for (let i = middle; i < array.length; i++) {
        rightArray[i - middle] = array[i];
    }

    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(array, leftArray, rightArray);
}

const merge = (mainArray, leftArray, rightArray) => {
    let indexLeftArray = 0;
    let indexRightArray = 0;
    let indexMainArray = 0;

    while (indexLeftArray < leftArray.length && indexRightArray < rightArray.length)
    {
        if (leftArray[indexLeftArray] < rightArray[indexRightArray])
        {
            mainArray[indexMainArray] = leftArray[indexLeftArray++];
        }
        else
        {
            mainArray[indexMainArray] = rightArray[indexRightArray++];
        }
        indexMainArray++;
    }

    while (indexLeftArray < leftArray.length)
    {
        mainArray[indexMainArray++] = leftArray[indexLeftArray++];
    }

    while (indexRightArray < rightArray.length)
    {
        mainArray[indexMainArray++] = rightArray[indexRightArray++];
    }
}
