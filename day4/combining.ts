interface Flyable {
    fly(): void;
}
abstract class Bird {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract eat(): void;
}
class Eagle extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying high.`);
    }
}
class Sparrow extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying low.`);
    }
}
const eagle = new Eagle('Eagle');
eagle.eat(); 
eagle.fly(); 

const sparrow = new Sparrow('Sparrow');
sparrow.eat(); 
sparrow.fly(); 