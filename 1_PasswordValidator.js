const prompt = require("prompt-sync")();
let password = prompt("Enter Password : ");

if(password === "061@Password")
{
    console.log("Password Matched. Password validation Successful.");
}
else{
    console.log("Password didn't match. Password validation unsuccessful");
}