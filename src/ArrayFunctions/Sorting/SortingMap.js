import { bubbleSort} from "./BubbleSort";
import { insertionSort} from "./InsertionSort";
import { selectionSort} from "./SelectionSort";
import { quickSort } from "./QuickSort";
import { mergeSort} from "./MergeSort";

export const sortingMap = new Map([
    ['Bubble Sort', { function: bubbleSort, timeComplexity: 'O(n²)', memoryComplexity: 'O(1)'}],
    ['Insertion Sort', { function: insertionSort, timeComplexity: 'O(n²)', memoryComplexity: 'O(1)'}],
    ['Selection Sort', { function: selectionSort, timeComplexity: 'O(n²)', memoryComplexity: 'O(1)'}],
    ['Quick Sort', { function: quickSort, timeComplexity: 'O(n log n)', memoryComplexity: 'O(log n)'}],
    ['Merge Sort', { function: mergeSort, timeComplexity: 'O(n log n)', memoryComplexity: 'O(n)'}],
]);