"use strict";
class FinancialAccount {
    constructor(accountID, funds) {
        this.accountID = accountID;
        this.funds = funds;
    }
}
class PersonalSavings extends FinancialAccount {
    transact(amount) {
        if (amount <= this.funds) {
            this.funds -= amount;
            console.log(`Transaction of $${amount} successful. New balance: $${this.funds}`);
        }
        else {
            console.log('Insufficient funds for transaction.');
        }
    }
}
class BusinessChecking extends FinancialAccount {
    constructor() {
        super(...arguments);
        this.overdraftAllowance = 500;
    }
    transact(amount) {
        if (amount <= this.funds + this.overdraftAllowance) {
            this.funds -= amount;
            console.log(`Transaction of $${amount} successful. New balance: $${this.funds}`);
        }
        else {
            console.log('Overdraft limit exceeded.');
        }
    }
}
const personalSavings = new PersonalSavings(301, 2000);
const businessChecking = new BusinessChecking(302, 2000);
personalSavings.transact(500);
personalSavings.transact(1600);
businessChecking.transact(2200);
businessChecking.transact(400);
