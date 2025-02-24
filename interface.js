var employees = [
    { name: "Alice", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 32, position: "Designer" },
    { name: "David", age: 25, position: "Intern" },
    { name: "Eve", age: 40, position: "CEO" }
];
var filteredEmployees = employees.filter(function (employee) { return employee.age > 30; });
console.log(filteredEmployees);
