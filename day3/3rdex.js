function greet(name, message) {
    if (message === void 0) { message = "Hello"; }
    return "".concat(message, ", ").concat(name, "!");
}
console.log(greet("John"));
console.log(greet("John", "Good morning"));
