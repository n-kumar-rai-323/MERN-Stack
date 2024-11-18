

const mainCounter = () => {
    let count = 0;
    return () => {
        count = count + 1;
        return count;
    }
}
const count1 = mainCounter()
console.log(count1())



const bankAccount = (initBalance) => {
    let balance = initBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount > balance) {
                return `Insufficient funds`
            }
            balance -= amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    };
}
const myAccount = bankAccount(1000);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(1999));
console.log(myAccount.withdraw(400));
console.log(myAccount.getBalance());


console.log("Delayed Greeting")

const example=(name)=>{
    return ()=>{
        console.log(`Hello, ${name}`);
    };
};

const firstName = example("Nishan")
const nextName = example("Alisha Gurung")

setTimeout(firstName,2000);
setTimeout(nextName,4000)



function createMultiplier(multiplier) {
    return function (number) {
        console.log(number)
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15