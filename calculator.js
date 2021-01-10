// Define the numbers and the operation here
let num1=parseInt(prompt("Insert first number: "));
let num2=parseInt(prompt("Insert second number: "));
let operation=prompt("Is it + , - , * or / ? ")

// Write if-statements here
if(operation==="+") console.log(num1+num2)
else if(operation==="-") console.log(num1-num2)
else if(operation==="*") console.log(num1*num2)
else if(operation==="/") console.log(num1/num2)
else console.log("Wrong operation, please review")