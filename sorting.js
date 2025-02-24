var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var scores = [55, 23, 87, 12, 99, 38];
var ascending = __spreadArray([], scores, true).sort(function (a, b) { return a - b; });
var descending = __spreadArray([], scores, true).sort(function (a, b) { return b - a; });
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);
