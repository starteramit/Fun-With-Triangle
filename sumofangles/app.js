var input = document.querySelectorAll(".input");
var button = document.querySelector("#submit");
var output = document.querySelector(".output");

button.addEventListener("click", () => {
  output.style.display = "none";

  var sum = addAngles();

  if (sum === 180) {
    console.log(sum);
    showText("Yay, These angles will make a traingle.");
  } else {
    showText("Oops, These angles can't make a traingle");
  }
});

function addAngles() {
  var sum = 0;
  input.forEach((element) => {
    sum = sum + Number(element.value);
  });
  return sum;
}

function showText(text) {
  output.style.display = "block";
  output.innerText = text;
}