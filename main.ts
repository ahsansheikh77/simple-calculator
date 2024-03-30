#! /usr/bin/env node

import { log } from "console";
import inquirer from "inquirer";

const ans = await inquirer.prompt([
  {
    type: "number",
    message: "enter you 1st number",  //koi bh nmbr btao
    name: "number1",
  },
  {
    type: "number",
    message: "enter you 2nd number",   //koi bh nmbr btao
    name: "number2",
  },
  {
    message: "enter you operator",
    type: "list",
    name: "operator",     //list dedi ismy s btaoa
    choices: ["subtraction", "multiple", "divided", "addition"],
  },
]);

//conditional statment
if (ans.operator === "subtraction") {
  console.log(`your answer is${ans.number1 - ans.number2}`);
} else if (ans.operator === "multiple") {
  console.log(`your answer is${ans.number1 * ans.number2}`);
} else if (ans.operator === "divided") {
  console.log(`your answer is${ans.number1 / ans.number2}`);
} else if (ans.operator === "addition") {
  console.log(`your answer is${ans.number1 + ans.number2}`);
} else {
  console.log("wrong enter");
}
