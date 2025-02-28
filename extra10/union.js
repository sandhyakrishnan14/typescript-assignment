"use strict";
function formatInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else if (typeof input === 'number') {
        return `$${input}`;
    }
    else if (Array.isArray(input)) {
        return input.join(', ');
    }
    else {
        throw new Error('Invalid input type');
    }
}
console.log(formatInput("hello"));
console.log(formatInput(123));
console.log(formatInput(["apple", "banana", "cherry"]));
