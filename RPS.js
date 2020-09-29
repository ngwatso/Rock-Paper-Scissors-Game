const userScore = 0;
const compScore = 0;
const userScore_div = document.getElementById("player");
const compScore_div = document.getElementById("computer");
const scoreBoard_div = document.querySelector(".scoreboard");
const message_div = document.querySelector(".message");
const rock_a = document.getElementById(".rock");
const paper_a = document.getElementById(".paper");
const scissors_a = document.getElementById(".scissors");

rock_a.addEventListener("click", function () {
  console.log("Hey, you clicked on rock!");
});

paper_a.addEventListener("click", function () {
  console.log("Hey, you clicked on paper!");
});

scissors_a.addEventListener("click", function () {
  console.log("Hey, you clicked on scissors!");
});

function playerChoice(string) {
  let compChoice = Math.random();

  if (string === "rock" && compChoice >= 0.6667) {
    return "You chose rock, the computer chose scissors, you win!";
  } else if (string === "rock" && compChoice >= 0.3333) {
    return "You chose rock, the computer chose paper, you lose!";
  } else if (string === "rock" && compChoice < 0.3333) {
    return "You chose rock, the computer chose rock, it's a tie!";
  } else if (string === "paper" && compChoice >= 0.6667) {
    return "You chose paper, the computer chose scissors, you lose!";
  } else if (string === "paper" && compChoice >= 0.3333) {
    return "You chose paper, the computer chose paper, it's a tie!";
  } else if (string === "paper" && compChoice < 0.3333) {
    return "You chose paper, the computer chose rock, you win!";
  } else if (string === "scissors" && compChoice >= 0.6667) {
    return "You chose scissors, the computer chose scissors, it's a tie!";
  } else if (string === "scissors" && compChoice >= 0.3333) {
    return "You chose scissors, the computer chose paper, you win!";
  } else if (string === "scissors" && compChoice < 0.3333) {
    return "You chose scissors, the computer chose rock, you lose!";
  } else {
    return "Choose rock, paper or scissors!";
  }
}

console.log(playerChoice("scissors"));
