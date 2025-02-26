type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
};
let employee: Employee = {
    id: 1,
    name: "Alice",
    role: "manager"
};
console.log(employee)