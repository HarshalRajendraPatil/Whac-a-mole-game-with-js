const square = document.querySelectorAll(".square");
const board = document.querySelector(".grid");
const result = document.querySelector(".result");
const randomPosition = function () {
  return Math.trunc(Math.random() * 9) + 1;
};
const time = document.querySelector(".time");
let timeRemaining = 60;
let pointsScored = 0;
const score = document.querySelector(".score");
let position;

setInterval(() => {
  if (timeRemaining > 0) {
    position = randomPosition();
    document.getElementById(`${position}`).classList.add("mole");
    setTimeout(() => {
      document.getElementById(`${position}`).classList.remove("mole");
    }, 700);
    timeRemaining--;
    time.textContent = timeRemaining;
  } else {
    board.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerHTML = `Game finished <br> Your final score was ${pointsScored}`;
  }
}, 1000);

square.forEach(function (tile) {
  tile.addEventListener("click", function (e) {
    if (e.target.classList.contains("mole")) {
      pointsScored++;
      score.textContent = pointsScored;
    }
  });
});
