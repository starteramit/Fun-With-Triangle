var quizForm = document.querySelector(".quizForm");
var submitButton = document.querySelector("#formButton");
var output = document.querySelector(".output");

var answers = [
  "Yes",
  "No",
  "Yes",
  "Yes",
  "Yes",
  "Isosceles Triangle",
  "30",
  "Both",
  "5cm",
  "Scalene Triangle",
];

function submitHandler(e) {
  e.preventDefault();
  var score = 0;
  var index = 0;
  var formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === answers[index]) {
      score += 1;
    }
    index += 1;
  }
  if (score > 0) output.innerText = "Your Score is " + score + " out of 10!";
  else output.innerText = "Please select answers first!";
}

submitButton.addEventListener("click", submitHandler);