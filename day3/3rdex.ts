function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}
console.log(greet("John")); 
console.log(greet("John","Good morning"));