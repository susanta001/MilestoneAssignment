const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Enter First Number : "));
let num2 = parseInt(prompt("Enter Second Number : "));

let char = prompt("Enter operator any one (+, -, *, /) :");

switch(char)
{
    case "+":
        var result = num1 + num2;
        break;
    case "-":
        var result = num1 - num2;
        break;
    case "*":
        var result = num1 * num2;
        break;
    case "/":
        var result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
        var result = null;
    
}
console.log(`${num1} ${char} ${num2} = ${result}`);
