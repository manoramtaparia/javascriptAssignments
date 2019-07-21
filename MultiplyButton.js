var MultiplyButton = document.querySelector('#multiply');
MultiplyButton.addEventListener('click', ComputeProduct);
function ComputeProduct() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    console.log(parseInt(number1) * parseInt(number2));
}