import { insertionSort } from '../ArrayFunctions/Sorting/InsertionSort';

describe(
    'insertionSort(), sort array',
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
            it(`Array: ${test.array}, expected: ${test.expected}`, async () => {
                    let onSwap = () => {};
                    await insertionSort(test.array, onSwap, test.time);
                    expect(test.array).toEqual(test.expected);
                }
            );
        });
    }
)

test('insertionSort(), throw exception when array is empty', async() => {
        let array = [];
        let onSwap = () => {};
        try{
            await insertionSort(array, onSwap, 1);
        } catch(e){
            expect(e.message).toBe('Array is empty');
        }
    }
);