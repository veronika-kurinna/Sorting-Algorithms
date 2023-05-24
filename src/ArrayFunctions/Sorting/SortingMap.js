import { bubbleSort} from "./BubbleSort";
import { insertionSort} from "./InsertionSort";
import { selectionSort} from "./SelectionSort";
import { quickSort } from "./QuickSort";
import { mergeSort} from "./MergeSort";

export const sortingMap = new Map([
    ['Bubble Sort', bubbleSort],
    ['Insertion Sort', insertionSort],
    ['Selection Sort', selectionSort],
    ['Quick Sort', quickSort],
    ['Merge Sort', mergeSort],
]);

export const complexity = new Map([
    ['Bubble Sort', 'O(n²)'],
    ['Insertion Sort', 'O(n²)'],
    ['Selection Sort', 'O(n²)'],
    ['Quick Sort', 'O(n²)'],
    ['Merge Sort', 'O(n log n)'],
]);
