class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); 