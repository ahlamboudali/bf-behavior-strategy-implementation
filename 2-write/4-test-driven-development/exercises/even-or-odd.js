/**
 * Determines if each number in an array is even or odd.
 *   This is a pure function with no side-effects.
 *
 * @param {number[]} [nums=[]] - An array of numbers.
 * @returns {string[]} - An array with the same number of entries as nums.
 *    Each number has been replaced with "even" or "odd".
 *
 * @example
 *
 * evenOrOdd([1, 2]); // ['odd', 'even']
 */
export const evenOrOdd = (nums = []) => {
    // Map through each number in the nums array
    return nums.map(num => {
        // Check if the number is even or odd
        return num % 2 === 0 ? 'even' : 'odd';
    });
};
