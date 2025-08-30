function startCountdown() {
  document.getElementById('question-section').classList.add('hidden');
  document.getElementById('countdown-section').classList.remove('hidden');

  let countdown = 10; // 10-second countdown
  const countdownText = document.getElementById('countdown-text');
  countdownText.textContent = `Get ready... ${countdown}`;

  const interval = setInterval(() => {
    countdown--;
    countdownText.textContent = `Get ready... ${countdown}`;
    if (countdown < 0) {
      clearInterval(interval);
      document.getElementById('countdown-section').classList.add('hidden');
      document.getElementById('final-message').classList.remove('hidden');
    }
  }, 1000);
}
