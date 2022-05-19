console.log ("Welcome, this is basic calculator" );

let num1 = prompt("Enter the first number: ");

let num2 = prompt("Enter the second number: ");

const operators = prompt("Enter an operator, +, -, *, /");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operators == "+"){
  result = num1 + num2
}

else if (operators == "-"){
  result = num1 - num2
}

else if (operators == "*"){
  result = num1 * num2
}

else if (operators == "/"){
  result = num1 / num2
}

console.log("\nYour result: " + result);