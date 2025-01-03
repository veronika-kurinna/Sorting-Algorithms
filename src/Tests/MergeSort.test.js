import { mergeSort } from '../Scripts/Sorting/MergeSort';

describe(
    'mergeSort(), sort array',
    () => {
        const testCases = [
            {
                array: [6, 9, 2, -8, 4],
                expected: [-8, 2, 4, 6, 9]
            },
            {
                array: [1, 2, 5, 3, 4 ],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3, 4],
                expected: [1, 2, 3, 4]
            },
            {
                array: [3],
                expected: [3]
            },            
            {
                array: [ 3, 7, 2, 5, 4, 4 ],
                expected: [ 2, 3, 4, 4, 5, 7]
            }
        ];
        testCases.forEach(test => {
            it(`Array: ${test.array}, expected: ${test.expected}`, async() => {
                    let onSwap = () => {};
                    await mergeSort(test.array, onSwap, 1);
                    expect(test.array).toEqual(test.expected);
                }
            );
        });
    }
);

test('mergeSort(), throw exception when array is empty', async() => {
        let array = [];
        let onSwap = () => {};
        try {
            await mergeSort(array, onSwap, 1);
        } catch (error) {
            expect(error.message).toBe('Array is empty');
        }
    }
);