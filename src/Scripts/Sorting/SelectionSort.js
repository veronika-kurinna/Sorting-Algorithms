import { swap } from "../ArrayFunctions";
import { delay } from "../Delay"

export const selectionSort = async(array, onSwap, time) =>{
    if (array.length == 0) {
        throw new Error("Array is empty");
    }

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