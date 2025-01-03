export const generateArray = () => {
    let array = new Array(35);
    return array.fill(0).map(() => Math.floor(Math.random() * (400 - 25 + 1)) + 25);
}

export const shuffle = (array, onSwap) => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * i);
        swap(array, j, i);
    }
    onSwap(array);
}

export const swap = (array, firstElement, secondElement) => {
    let temp = array[firstElement] 
    array[firstElement] = array[secondElement];
    array[secondElement] = temp;
}
