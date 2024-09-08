// scripts.js

let currentQuestionIndex = 0;
let questions = [
    "What is your approach to solving complex problems in a team setting?",
    "How do you handle tight deadlines when managing multiple tasks?",
    "Can you describe a situation where you demonstrated leadership?",
    "What are your strategies for continuous self-improvement?",
    // Add more questions as needed
];
let answers = [];

// Initialize timer
let timeLeft = 20 * 60; // 20 minutes in seconds
let timerElement = document.getElementById("timer");

function startTimer() {
    let timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswers();
        }
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
    }, 1000);
}

// Update question text
function updateQuestion() {
    document.getElementById("question-text").textContent = questions[currentQuestionIndex];
}

// Submit all answers
function submitAnswers() {
    answers[currentQuestionIndex] = document.getElementById("answer-input").value;
    alert("Simulation completed! Your answers have been submitted.");
    // Redirect to the Thank You page
    window.location.href = "thankyou.html";
}

// Access and display the webcam
function startWebcam() {
    const webcamElement = document.getElementById("webcam");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            webcamElement.srcObject = stream;
        })
        .catch(function(error) {
            console.log("Something went wrong with the webcam: ", error);
        });
    }
}

// Function to start recording
function startAnswer() {
    document.getElementById("start-btn").classList.add("hidden");
    document.getElementById("end-btn").classList.remove("hidden");
    document.getElementById("recording-status").classList.remove("hidden");
    document.getElementById("answer-input").focus();
    // Add functionality for recording if needed
}

// Function to end recording
function endAnswer() {
    document.getElementById("start-btn").classList.remove("hidden");
    document.getElementById("end-btn").classList.add("hidden");
    document.getElementById("recording-status").classList.add("hidden");
    // Add functionality to stop recording if needed
}

// Start the timer, update question, and start the webcam on page load
window.onload = function () {
    startTimer();
    updateQuestion();
    startWebcam();
};
