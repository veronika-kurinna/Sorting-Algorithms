import { swap } from "../GeneralFunctions";
import {delay} from "./../../Helper/Delay"

export const quickSort = async(array, onSwap, time) => {
    if (array.length == 0) {
        throw new Error("Array is empty");
    }
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