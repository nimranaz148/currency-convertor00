#! /usr/bin/env node
import inquirer from "inquirer";
let c_vlaue = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Converting from",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "Converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to convert"
    }
]);
console.log((c_vlaue[ans.to] / c_vlaue[ans.from] * ans.amount).toFixed(2));
