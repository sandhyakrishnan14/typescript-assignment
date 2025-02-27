interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}
class CreditCard implements PaymentMethod {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Credit Card. Remaining balance: ${this.balance}`);
        } else {
            console.log('Insufficient balance on Credit Card.');
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Credit Card. New balance: ${this.balance}`);
    }
}
class DebitCard implements PaymentMethod {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Debit Card. Remaining balance: ${this.balance}`);
        } else {
            console.log('Insufficient balance on Debit Card.');
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Debit Card. New balance: ${this.balance}`);
    }
}
class UPI implements PaymentMethod {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using UPI. Remaining balance: ${this.balance}`);
        } else {
            console.log('Insufficient balance on UPI.');
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI. New balance: ${this.balance}`);
    }
}
const creditCard = new CreditCard(1000);
creditCard.pay(200); 
creditCard.refund(50); 

const debitCard = new DebitCard(500);
debitCard.pay(300); 
debitCard.refund(100); 

const upi = new UPI(700);
upi.pay(400); 
upi.refund(150);
