import { swap } from "./Sorting";

export const generateArray = () => {
    let numbers = new Array(35);
    numbers = numbers.fill(0).map(() => Math.floor(Math.random() * (400 - 25 + 1)) + 25);
    return numbers;
}

export const shuffleElements = (array, onSwap) => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * i);
        swap(array, j, i);
    }
    onSwap(array);
}
