interface User {
    id: number;
    name: string;
    email: string;
}
const user: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };
let newUser: Partial<User> = { name: "Bob" };
console.log(user);
console.log(newUser);
