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

function resetGame() {
  // Reset variables to initial values
  currentIndex = 0;
  score = 0;
  timer = timerDuration;

  // Update displays
  updateScoreDisplay();
  updateTimerDisplay();

  // Start the timer again
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    updateTimerDisplay();

    if (timer <= 0) {
      clearInterval(timerInterval);

      // Check if the score is at least 15
      if (score >= 15) {
        alert('Congrats on completing this round! Your final score is ' + score + '. Lets move to the next round!');
        currentRound++; // Increment currentRound
        window.location.href = 'round' + currentRound + '.html';
      } else {
        // Score is less than 15, restart the round
        alert('Score less than 15. Restarting the round.');
        resetGame();
      }
    }
  }, 1000);
}


// Initial score and timer display
updateScoreDisplay();
updateTimerDisplay();
