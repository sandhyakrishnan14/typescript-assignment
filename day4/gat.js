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
var PaymentGateway = /** @class */ (function () {
    function PaymentGateway() {
    }
    PaymentGateway.prototype.processPayment = function (amount) {
        console.log("Processing payment of ".concat(amount));
    };
    PaymentGateway.prototype.processRefund = function (amount) {
        console.log("Processing refund of ".concat(amount));
    };
    return PaymentGateway;
}());
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.validateTransaction = function (transactionId) {
        console.log("Validating transaction with ID: ".concat(transactionId));
        return transactionId.length > 0;
    };
    PayPal.prototype.authenticateUser = function (userId) {
        console.log("Authenticating user with ID: ".concat(userId));
        return userId.length > 0;
    };
    return PayPal;
}(PaymentGateway));
var paypal = new PayPal();
paypal.processPayment(100);
paypal.processRefund(50);
var isTransactionValid = paypal.validateTransaction('TX12345');
console.log("Transaction valid: ".concat(isTransactionValid));
var isUserAuthenticated = paypal.authenticateUser('User123');
console.log("User authenticated: ".concat(isUserAuthenticated));
