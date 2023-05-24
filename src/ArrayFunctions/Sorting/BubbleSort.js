import { swap } from "../GeneralFunctions";
import { delay } from "./../../Helper/Delay"

export const bubbleSort = async (array, onSwap, time) => {
    if (array.length == 0) {
        throw new Error("Array is empty");
    }

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