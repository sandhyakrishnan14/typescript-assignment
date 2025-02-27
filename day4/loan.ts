interface Loan {
    applyForLoan(amount: number): void;
}
interface Insurance {
    applyForInsurance(policy: string): void;
}
class Customer implements Loan, Insurance {
    private loanAmount: number | null = null;
    private insurancePolicy: string | null = null;

    applyForLoan(amount: number): void {
        this.loanAmount = amount;
        console.log(`Applied for a loan of ${amount}`);
    }

    applyForInsurance(policy: string): void {
        this.insurancePolicy = policy;
        console.log(`Applied for insurance policy: ${policy}`);
    }

    getLoanDetails(): number | null {
        return this.loanAmount;
    }

    getInsuranceDetails(): string | null {
        return this.insurancePolicy;
    }
}
const customer = new Customer();

customer.applyForLoan(50000); 
console.log(`Loan Details: ${customer.getLoanDetails()}`); 

customer.applyForInsurance('Health Insurance'); 
console.log(`Insurance Details: ${customer.getInsuranceDetails()}`); 