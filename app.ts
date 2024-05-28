#! /usr/bin/env node
import inquirer from "inquirer";

// Bankaccount interface
    interface BankAccount{
        accountNumber: number;
        balance: number;
        withdraw(amount: number): void  
        deposit(amount: number): void
        checkBalance(): void
}

// Bank Account class
class BankAccount implements BankAccount{
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance
    }

    // debit money
    withdraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining balance: $${this.balance}`);
        }else {
            console.log("Insufficient balance.");
    }
}

// Credit money
deposit(amount: number): void {
    if(amount > 100){
        amount -= 1; 
    } this.balance += amount;
console.log(`Deposit of $${amount} successful.Remaining balance: $${this.balance}`);
}

//checkBalance
checkBalance(): void {
    console.log(`Current balance: $${this.balance}`);
}

}
// Customer Class
class Customer{
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number, account: BankAccount)
    {
        this.firstName = firstName;
        this. lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account

    }
}
//Create bank accounts

const accounts: BankAccount[] =[
    new BankAccount (1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
];

// Create customer
const customers: Customer[] = [
    new Customer ("babar", "Ali", "Male", 35, 3162223334, accounts[0]),
    new Customer ("saba", "Qureshi", "Female", 24, 3332223334, accounts[1]),
    new Customer ("Sana", "Khan", "Female", 35, 3412223334, accounts[2])
]

// Function to interact with bank account

async function service() {
    do{
const accountNumberInput = await inquirer.prompt({
    name: "accountNumber",
    type: "number",
    message: "Enter your account number:"
})

const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber)
if(customer){
    console.log(`Welcome, ${customer.firstName} ${customer.lastName}`);
    const ans = await inquirer.prompt([{ 
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["Deposit", "Withdraw", "Check balance", "Exit"]
    }]);

    switch (ans.select) {
        case "Deposite":
            const depositAmount = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "Enter the amount to deposit:"
            })
            customer.account.deposit(depositAmount.amount);
            break;
            case "Withdraw":
                const withdrawAmount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                })
                customer.account.withdraw(withdrawAmount.amount);
                break;
                case "check Balance":
                    customer.account.checkBalance();
                    break;
                    case "Exit":
                        console.log("Exciting bank program...");
                        console.log("\n Thank you for using our bank services.Have a great day!");
                        return;
            }

        }else{
            console.log("Invalid account number.Please try again.");
        }
    }while(true)
    }

    service()
        