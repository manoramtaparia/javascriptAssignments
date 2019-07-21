var calculatorButton = document.querySelector('#calculator');
calculatorButton.addEventListener('click', displayCalculator);

function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    if(num2 == 0) {
        return("Divide by zero error!");
    }
    else {
        return num1 / num2;
    }
}
function displayCalculator() {
    var n1 = 40;
    var n2 = 15;
    var result = add(n1, n2);
    console.log("Addition of " + n1 +" and " + n2 +" is " + result);
    result = subtract(n1, n2);
    console.log("Difference between " + n1 +" and " + n2 +" is " + result);
    result = multiply(n1, n2);
    console.log("Product of " + n1 +" and " + n2 +" is " + result);
    result = divide(n1, n2);
    console.log("Division of " + n1 +" by " + n2 +" gives " + result);
}
