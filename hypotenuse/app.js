var firstInput = document.querySelector("#firstInput");
var secondInput = document.querySelector("#secondInput");
var output = document.querySelector(".output");
var button = document.querySelector("#button");

button.addEventListener("click", () => {
  var firstValue = Number(firstInput.value);
  var secondValue = Number(secondInput.value);
  if ((firstValue > 1) & (secondValue > 1)) {
    var hypotenuse = Math.sqrt(
      firstValue * firstValue + secondValue * secondValue
    );
    output.innerText = "c =" + hypotenuse;
  } else {
    output.innerText = "Please Enter Valid Values of a and b!";
  }
});