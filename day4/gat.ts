abstract class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount}`);
    }

    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount}`);
    }

    abstract validateTransaction(transactionId: string): boolean;
}
interface SecurePayment {
    authenticateUser(userId: string): boolean;
}
class PayPal extends PaymentGateway implements SecurePayment {
    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction with ID: ${transactionId}`);
        return transactionId.length > 0;
    }

    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user with ID: ${userId}`);
        return userId.length > 0;
    }
}
const paypal = new PayPal();

paypal.processPayment(100); 
paypal.processRefund(50); 

const isTransactionValid = paypal.validateTransaction('TX12345');
console.log(`Transaction valid: ${isTransactionValid}`); 

const isUserAuthenticated = paypal.authenticateUser('User123');
console.log(`User authenticated: ${isUserAuthenticated}`); 
