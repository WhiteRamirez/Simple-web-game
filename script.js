let correctAnswer = Math.floor(Math.random() * 1000) + 1
let answerFromUser = document.getElementById("gameInput").value
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer(document.getElementById("gameInput").value);
    }
});
function checkAnswer(answerFromUser) {
 if (correctAnswer == answerFromUser) {
    document.getElementById("answer").textContent = "Correct answer! You have won!"
 } else if (correctAnswer > answerFromUser) {
    document.getElementById("answer").textContent = "Try more"
 }
 else {
    document.getElementById("answer").textContent = "Try less"
 }
}
