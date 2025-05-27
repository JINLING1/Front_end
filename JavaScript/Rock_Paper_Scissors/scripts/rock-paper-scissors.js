let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
let computerMove = "";
function pickComputerMove() {
  const randomNumber = Math.random(); //返回0-1随机数
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
// document.querySelector('.js-rock-button').addEventListener('click',playGame('rock')); //这样写会直接调用函数并返回值，而不是点击时调用
document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
});

//添加键盘监听器
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  }
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }
  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else if (result === "Tie.") {
    score.ties++;
  }

  //save score to localStorage
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `You
<img src="images/${playerMove}-emoji.png" 
class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
