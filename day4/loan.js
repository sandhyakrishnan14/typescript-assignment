var Customer = /** @class */ (function () {
    function Customer() {
        this.loanAmount = null;
        this.insurancePolicy = null;
    }
    Customer.prototype.applyForLoan = function (amount) {
        this.loanAmount = amount;
        console.log("Applied for a loan of ".concat(amount));
    };
    Customer.prototype.applyForInsurance = function (policy) {
        this.insurancePolicy = policy;
        console.log("Applied for insurance policy: ".concat(policy));
    };
    Customer.prototype.getLoanDetails = function () {
        return this.loanAmount;
    };
    Customer.prototype.getInsuranceDetails = function () {
        return this.insurancePolicy;
    };
    return Customer;
}());
var customer = new Customer();
customer.applyForLoan(50000);
console.log("Loan Details: ".concat(customer.getLoanDetails()));
customer.applyForInsurance('Health Insurance');
console.log("Insurance Details: ".concat(customer.getInsuranceDetails()));
