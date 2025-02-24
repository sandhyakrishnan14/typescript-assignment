interface Employee {
    name: string;
    age: number;
    position: string;
}
const employees: Employee[] = [
    { name: "Alice", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 32, position: "Designer" },
    { name: "David", age: 25, position: "Intern" },
    { name: "Eve", age: 40, position: "CEO" }
];
const filteredEmployees = employees.filter(employee => employee.age > 30);
console.log(filteredEmployees);