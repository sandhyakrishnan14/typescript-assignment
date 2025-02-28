interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
type ReadonlyEmployee = Readonly<Employee>;
type PartialEmployee = Partial<Employee>;
function updateEmployeeInfo(emp: PartialEmployee): void {
    console.log('Updated employee info:', emp);
}