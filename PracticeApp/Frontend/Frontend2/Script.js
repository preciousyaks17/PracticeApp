var question = "What is the capital of France?";
var choices = ["Paris", "London", "Berlin", "Madrid"];
var correctAnswer = "Paris";

document.getElementById("question").textContent = question;

choices.forEach(function (choice, i) {
    var button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", function () {
        document.getElementById("submit-button").dataset.selectedAnswer = choice;
    });
    document.getElementById("choices").appendChild(button);
});

document.getElementById("submit-button").addEventListener("click", function () {
    var selectedAnswer = this.dataset.selectedAnswer;
    if (selectedAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent =
            "Incorrect. The correct answer is " + correctAnswer + ".";
    }
});
