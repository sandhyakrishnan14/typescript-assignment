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
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, balance, withdrawalLimit) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.withdrawalLimit = withdrawalLimit;
        return _this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return SavingsAccount;
}(BankAccount));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, balance, overdraftLimit) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    };
    return CheckingAccount;
}(BankAccount));
var savingsAccount = new SavingsAccount('SA123', 1000, 500);
console.log("Savings Account Balance: ".concat(savingsAccount.getBalance()));
savingsAccount.deposit(200);
console.log("Savings Account Balance after deposit: ".concat(savingsAccount.getBalance()));
console.log("Withdrawal of 300: ".concat(savingsAccount.withdraw(300)));
console.log("Savings Account Balance after withdrawal: ".concat(savingsAccount.getBalance()));
console.log("Withdrawal of 600: ".concat(savingsAccount.withdraw(600)));
console.log("Savings Account Balance after failed withdrawal: ".concat(savingsAccount.getBalance()));
var checkingAccount = new CheckingAccount('CA123', 1000, 200);
console.log("Checking Account Balance: ".concat(checkingAccount.getBalance()));
checkingAccount.deposit(300);
console.log("Checking Account Balance after deposit: ".concat(checkingAccount.getBalance()));
console.log("Withdrawal of 1100: ".concat(checkingAccount.withdraw(1100)));
console.log("Checking Account Balance after withdrawal: ".concat(checkingAccount.getBalance()));
console.log("Withdrawal of 1300: ".concat(checkingAccount.withdraw(1300)));
console.log("Checking Account Balance after failed withdrawal: ".concat(checkingAccount.getBalance()));
