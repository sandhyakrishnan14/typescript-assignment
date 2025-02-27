var Developer = /** @class */ (function () {
    function Developer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Developer.prototype.speak = function () {
        console.log("".concat(this.name, " says: Hello!"));
    };
    Developer.prototype.work = function () {
        console.log("".concat(this.name, " is working and earns ").concat(this.salary, " per year."));
    };
    return Developer;
}());
var developer = new Developer('Alice', 80000);
developer.speak();
developer.work();
