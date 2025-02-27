var CreditCard = /** @class */ (function () {
    function CreditCard(balance) {
        this.balance = balance;
    }
    CreditCard.prototype.pay = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using Credit Card. Remaining balance: ").concat(this.balance));
        }
        else {
            console.log('Insufficient balance on Credit Card.');
        }
    };
    CreditCard.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to Credit Card. New balance: ").concat(this.balance));
    };
    return CreditCard;
}());
var DebitCard = /** @class */ (function () {
    function DebitCard(balance) {
        this.balance = balance;
    }
    DebitCard.prototype.pay = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using Debit Card. Remaining balance: ").concat(this.balance));
        }
        else {
            console.log('Insufficient balance on Debit Card.');
        }
    };
    DebitCard.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to Debit Card. New balance: ").concat(this.balance));
    };
    return DebitCard;
}());
var UPI = /** @class */ (function () {
    function UPI(balance) {
        this.balance = balance;
    }
    UPI.prototype.pay = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Paid ".concat(amount, " using UPI. Remaining balance: ").concat(this.balance));
        }
        else {
            console.log('Insufficient balance on UPI.');
        }
    };
    UPI.prototype.refund = function (amount) {
        this.balance += amount;
        console.log("Refunded ".concat(amount, " to UPI. New balance: ").concat(this.balance));
    };
    return UPI;
}());
var creditCard = new CreditCard(1000);
creditCard.pay(200);
creditCard.refund(50);
var debitCard = new DebitCard(500);
debitCard.pay(300);
debitCard.refund(100);
var upi = new UPI(700);
upi.pay(400);
upi.refund(150);
