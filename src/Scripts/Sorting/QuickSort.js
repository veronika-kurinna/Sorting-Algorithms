import { swap, shuffle } from "../ArrayFunctions";
import { delay } from "../Delay";

export const quickSort = async(array, onSwap, time) => {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }
    shuffle(array, onSwap);
    await sort(array, 0, array.length - 1, onSwap, time);
}

const sort = async(array, start, finish, onSwap, time) => {
    if (start < finish) {
        let pivot  = await findIndexPivot(array, start, finish, onSwap, time);
        await sort(array, start, pivot - 1, onSwap, time);
        await sort(array, pivot + 1, finish, onSwap, time);
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