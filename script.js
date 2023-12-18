const imageContainer = document.getElementById('imageContainer');
const galleryImage = document.getElementById('galleryImage');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');

const imagePaths = images;
let currentIndex = 0;
let score = 0;
let timer = timerDuration; // Set your desired countdown time in seconds
let timerInterval;

// Function to change the image to the next one, update the score, and handle the timer
function changeImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  galleryImage.src = imagePaths[currentIndex];
  score++;
  updateScoreDisplay();
}

// Function to update the score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Function to update the timer display
function updateTimerDisplay() {
  timerDisplay.textContent = `Timer: ${timer}`;
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    updateTimerDisplay();

    if (timer <= 0) {
      clearInterval(timerInterval);
      // Timer has reached zero, perform any additional actions
      alert('Game Over! Your final score is ' + score);
    }
  }, 1000);
}

// Attach a keydown event listener to the document
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is the space bar (key code 32)
  if (event.keyCode === 32) {
    // Call your function (e.g., changeImage) here
    changeImage();

    // If the timer is not running, start it
    if (!timerInterval) {
      startTimer();
    }
  }
});

// Initial score and timer display
updateScoreDisplay();
updateTimerDisplay();
