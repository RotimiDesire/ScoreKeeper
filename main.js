const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");
const p1Button = document.getElementById("p1-button");
const p2Button = document.getElementById("p2-button");
const reset = document.getElementById("reset");
const playTo = document.getElementById("playto");

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

const resetF = () => {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;

  p1Display.innerText = p1Score;
  p2Display.innerText = p2Score;

  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  p1Button.disabled = false;
  p2Button.disabled = false;
};

reset.addEventListener("click", resetF);

playTo.addEventListener("change", () => {
  winScore = parseInt(playTo.value);
  resetF();
});

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.innerText = p2Score;
  }
});
