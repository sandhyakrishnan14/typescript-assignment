interface Person {
    name: string;
    speak(): void;
}
interface Employee extends Person {
    salary: number;
    work(): void;
}
class Developer implements Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    speak(): void {
        console.log(`${this.name} says: Hello!`);
    }

    work(): void {
        console.log(`${this.name} is working and earns ${this.salary} per year.`);
    }
}
const developer = new Developer('Alice', 80000);
developer.speak(); 
developer.work();