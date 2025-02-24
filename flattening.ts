let nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];
function flattenArray(arr: any[]): any[] {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);  