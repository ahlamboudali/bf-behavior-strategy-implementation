/**
 * Returns the middle character from a string.
 *  It returns the middle 2 characters if the string has an even length.
 *
 * @param {string} [text=''] - Find the middle character(s) of this string.
 * @returns {string} The middle character(s) in the text.
 */
export const middleCharacter = (text = '') => {
    const length = text.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If the string has an even length, return the middle two characters
        return text.slice(middleIndex - 1, middleIndex + 1);
    } else {
        // If the string has an odd length, return the middle character
        return text.charAt(middleIndex);
    }
};