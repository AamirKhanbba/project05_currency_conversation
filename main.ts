#! /usr/bin/env node
 
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("welcom to aamir khan : currency conversion"))


// Define the list of currencies and their exchange rates 
let exchangeRateList: any = {
    "USD" : 1,
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 280,
    // add more currencies and their exchange rate 
}

// propmt the user to select currrencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: " select a currency to converrt from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "toCurrency",
        type: "list",
        message: " select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: " enter amount to convet:"
    }
]);

// perform currency conervation by using formula

let fromAmount = exchangeRateList[userAnswer.fromCurrency];
let toAmount = exchangeRateList[userAnswer.toCurrency];
let amount = userAnswer.amount;

// formula of conversion 
let baseAmount = amount / fromAmount ;
let convertedAmount = baseAmount * toAmount;

// Display the converted amount

console.log(`Converted amount: ${convertedAmount.toFixed(3)}`);

