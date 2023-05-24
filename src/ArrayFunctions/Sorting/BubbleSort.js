import { swap } from "../GeneralFunctions";
import { delay } from "./../../Helper/Delay"

export const bubbleSort = async (array, onSwap, time) => {
    if (array.length == 0) {
        throw new Error("Array is empty");
    }

    for (let i = 0; i < array.length; i++) {
        let IsElementsSwapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                await delay(time);
                swap(array, j, j + 1)
                onSwap(array);
                IsElementsSwapped = true;
            }
        }
        let isArraySorted = IsElementsSwapped === false;
        if (isArraySorted) {
            break;
        }
    }
}