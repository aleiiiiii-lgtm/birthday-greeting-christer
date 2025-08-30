function chooseDream(choice) {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("dark-meme-screen").classList.remove("hidden");

  // Show dark meme for 2 seconds, then light meme
  setTimeout(() => {
    document.getElementById("dark-meme-screen").classList.add("hidden");
    document.getElementById("light-meme-screen").classList.remove("hidden");
  }, 2000);

  // Show light meme for 3 seconds, then countdown
  setTimeout(() => {
    document.getElementById("light-meme-screen").classList.add("hidden");
    document.getElementById("countdown-screen").classList.remove("hidden");
    startCountdown();
  }, 5000);
}

function startCountdown() {
  let count = 10;
  const counter = document.getElementById("count");

  const interval = setInterval(() => {
    count--;
    counter.textContent = count;

    if (count <= 0) {
      clearInterval(interval);
      document.getElementById("countdown-screen").classList.add("hidden");
      document.getElementById("final-screen").classList.remove("hidden");
    }
  }, 1000);
}
