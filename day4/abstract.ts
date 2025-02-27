abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}
class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle('red', 5);
console.log(`Circle Color: ${circle.getColor()}`);
console.log(`Circle Area: ${circle.calculateArea()}`);

const rectangle = new Rectangle('blue', 4, 6);
console.log(`Rectangle Color: ${rectangle.getColor()}`);
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);