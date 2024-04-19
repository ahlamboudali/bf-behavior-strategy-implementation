export const matchingBraces = (text = '') => {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of text) {
        if (pairs[char]) {
            stack.push(char); // Push opening braces onto the stack
        } else if (char === ')' || char === ']' || char === '}') {
            // If it's a closing brace
            const top = stack.pop(); // Pop the top element from the stack
            if (!top || pairs[top] !== char) {
                return false; // Mismatched braces
            }
        }
    }

    return stack.length === 0; // If stack is empty, braces are matched
};