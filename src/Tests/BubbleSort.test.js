import { bubbleSort } from '../ArrayFunctions/Sorting/BubbleSort';

describe(
    'Test Bubble sort',
    () => {
        const testCases = [
            {
                array: [6, 9, 2, -8, 4],
                expected: [-8, 2, 4, 6, 9],
                time: 1
            },
            {
                array: [1, 2, 5, 3, 4 ],
                expected: [1, 2, 3, 4, 5],
                time: 1
            },
            {
                array: [1, 2, 3, 4],
                expected: [1, 2, 3, 4],
                time: 1
            },
            {
                array: [3],
                expected: [3],
                time: 1
            },            {
                array: [ 3, 7, 2, 5, 4, 4 ],
                expected: [ 2, 3, 4, 4, 5, 7],
                time: 1
            }
        ];
        testCases.forEach(test => {
            it(
                `Array: ${test.array}, expected: ${test.expected}`,
                async () => {
                    let onSwap = () => {};
                    await bubbleSort(test.array, onSwap, test.time);
                    expect(test.array).toEqual(test.expected);
                }
            );
        });
    }
)

test(
    'Test Bubble sort exception', 
    async() => {
        let array = [];
        let onSwap = () => {};
        try{
            await bubbleSort(array, onSwap, 1);
        } catch(e){
            expect(e.message).toBe('Array is empty');
        }
    }
);