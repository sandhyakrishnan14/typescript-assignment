var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " (").concat(this.year, ")");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo());
