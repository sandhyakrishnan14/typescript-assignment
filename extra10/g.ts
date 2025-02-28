interface User {
    id: number;
    name: string;
    role: 'Admin' | 'Customer';
}

function getUserDetails<T extends User>(user: T): string {
    return `User ${user.name} is a ${user.role}`;
}
const adminUser: User = { id: 1, name: "Alice", role: "Admin" };
const customerUser: User = { id: 2, name: "Bob", role: "Customer" };
console.log(getUserDetails(adminUser)); 
console.log(getUserDetails(customerUser));