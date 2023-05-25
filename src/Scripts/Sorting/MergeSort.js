import { delay } from "../Delay"

export const mergeSort = async(array, onSwap, time) => {
    if (array.length == 0) {
        throw new Error("Array is empty");
    }
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