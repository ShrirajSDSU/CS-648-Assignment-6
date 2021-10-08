var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));

if (num1 > num2) {
    document.write(num1 + ' is Larger');
} else if (num1 < num2) {
    document.write(num2 + ' is Larger');
} else {
    document.write('Both the numbers ' + num1 + ' and ' + num2 + ' are same');
}

