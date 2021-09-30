var baseInput = document.querySelector(".baseInput");
var heightInput = document.querySelector(".heightInput");
var calcButton = document.querySelector(".calculate");
var output = document.querySelector(".output");

function findArea() {
  var baseValue = baseInput.value;
  var heightValue = heightInput.value;
  var area = 0.5 * baseValue * heightValue;
  output.innerText = "Area = " + area + " units";
}

calcButton.addEventListener("click", findArea);