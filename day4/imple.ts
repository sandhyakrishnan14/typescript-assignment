interface Vehicle {
    speed: number;
    move(): void;
}
class Car implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`The car is moving at ${this.speed} km/h.`);
    }
}
class Bicycle implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`The bicycle is moving at ${this.speed} km/h.`);
    }
}
interface Vehicle {
    speed: number;
    move(): void;
}
const car = new Car(120);
car.move(); 
const bicycle = new Bicycle(25);
bicycle.move(); 