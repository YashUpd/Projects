let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const btn = document.querySelector("#btn");
const resetPara = document.querySelector(".resetPara");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win!Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose!Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "Game was draw!";
  msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const resetGame = ()=>{
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    userScore = 0;
    compScore = 0;
    userWin = true;
    resetPara.style.backgroundColor = "#081b31";
    resetPara.innerText = "Play your game!";
    
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

btn.addEventListener("click", resetGame);