var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("The car is moving at ".concat(this.speed, " km/h."));
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(speed) {
        this.speed = speed;
    }
    Bicycle.prototype.move = function () {
        console.log("The bicycle is moving at ".concat(this.speed, " km/h."));
    };
    return Bicycle;
}());
var car = new Car(120);
car.move();
var bicycle = new Bicycle(25);
bicycle.move();
