var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(user, updates) {
    return __assign(__assign({}, user), updates);
}
var user = { id: 1, name: "John Doe", email: "john@example.com" };
var updates = { name: "Jane Doe" };
var updatedUser = updateUser(user, updates);
console.log(updatedUser);
