const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
} 

export const bubbleSort = async (numbers, onSwap, time) => {
    let array = numbers;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                await delay(time);
                let temp = array[j] 
                array[j] = array[j + 1];
                array[j + 1] = temp;
                onSwap(array);
            }
        }
    }
}
