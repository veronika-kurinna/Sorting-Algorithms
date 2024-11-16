import { swap } from "../ArrayFunctions";
import { delay } from "../Delay"

export const insertionSort = async (array, onSwap, time) => {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }
    
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