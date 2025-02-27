var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    return Bird;
}());
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle(name) {
        return _super.call(this, name) || this;
    }
    Eagle.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Eagle.prototype.fly = function () {
        console.log("".concat(this.name, " is flying high."));
    };
    return Eagle;
}(Bird));
var Sparrow = /** @class */ (function (_super) {
    __extends(Sparrow, _super);
    function Sparrow(name) {
        return _super.call(this, name) || this;
    }
    Sparrow.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Sparrow.prototype.fly = function () {
        console.log("".concat(this.name, " is flying low."));
    };
    return Sparrow;
}(Bird));
var eagle = new Eagle('Eagle');
eagle.eat();
eagle.fly();
var sparrow = new Sparrow('Sparrow');
sparrow.eat();
sparrow.fly();
