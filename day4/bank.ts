abstract class BankAccount {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    private withdrawalLimit: number;

    constructor(accountNumber: string, balance: number, withdrawalLimit: number) {
        super(accountNumber, balance);
        this.withdrawalLimit = withdrawalLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance && amount <= this.withdrawalLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
class CheckingAccount extends BankAccount {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
const savingsAccount = new SavingsAccount('SA123', 1000, 500);
console.log(`Savings Account Balance: ${savingsAccount.getBalance()}`);
savingsAccount.deposit(200);
console.log(`Savings Account Balance after deposit: ${savingsAccount.getBalance()}`);
console.log(`Withdrawal of 300: ${savingsAccount.withdraw(300)}`);
console.log(`Savings Account Balance after withdrawal: ${savingsAccount.getBalance()}`);
console.log(`Withdrawal of 600: ${savingsAccount.withdraw(600)}`); 
console.log(`Savings Account Balance after failed withdrawal: ${savingsAccount.getBalance()}`);

const checkingAccount = new CheckingAccount('CA123', 1000, 200);
console.log(`Checking Account Balance: ${checkingAccount.getBalance()}`);
checkingAccount.deposit(300);
console.log(`Checking Account Balance after deposit: ${checkingAccount.getBalance()}`);
console.log(`Withdrawal of 1100: ${checkingAccount.withdraw(1100)}`);
console.log(`Checking Account Balance after withdrawal: ${checkingAccount.getBalance()}`);
console.log(`Withdrawal of 1300: ${checkingAccount.withdraw(1300)}`); 
console.log(`Checking Account Balance after failed withdrawal: ${checkingAccount.getBalance()}`);
