"use strict";
function getUserDetails(user) {
    return `User ${user.name} is a ${user.role}`;
}
const adminUser = { id: 1, name: "Alice", role: "Admin" };
const customerUser = { id: 2, name: "Bob", role: "Customer" };
console.log(getUserDetails(adminUser));
console.log(getUserDetails(customerUser));
