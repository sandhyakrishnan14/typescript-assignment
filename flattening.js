var nestedArray = [1, [2, 3], [4, [5, 6]]];
function flattenArray(arr) {
    return arr.reduce(function (acc, val) { return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val); }, []);
}
var flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
