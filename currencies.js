let input = require('sync-input');
let currencyList = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

console.log("Welcome to Currency Converter!");

for (let key in currencyList) {
    console.log(`1 USD equals ${currencyList[key]} ${key}`);
}

while (true) {
    console.log("What do you want to do?\n1-Convert currencies 2-Exit program");
    let want = Number(input());
    if (want === 1) {

        console.log("What do you want to convert?");


        let possible = ["JPY", "EUR", "RUB", "USD", "GBP"];

        let curr = input("From: ").toUpperCase();
        const check = possible.some((currency) => {
            return currency === curr;
        })

        if (!check) {
            console.log("Unknown currency");
        } else {
            let name = input("To: ").toUpperCase();

            const check2 = possible.some((currency) => {
                return currency === name;
            })

            if (!check2) {
                console.log("Unknown currency");
            } else {
                let amount = Number(input("Amount: "));
                if (amount < 1) {
                    console.log("The amount cannot be less than 1")
                } else if (isNaN(amount)) {
                    console.log("The amount has to be a number")
                } else {
                    console.log(`Result: ${amount} ${curr} equals ${(amount / currencyList[curr] * currencyList[name]).toFixed(4)} ${name}`)
                }
            }
        }
    } else if (want === 2) {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");
    }
}