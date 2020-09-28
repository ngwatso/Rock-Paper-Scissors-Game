function playerChoice(string) {
  let compChoice = Math.random();
  if (string === "rock" && compChoice < 0.3333) {
    return "You chose rock, the computer chose rock, it's a tie!";
  } else if (string === "rock" && compChoice >= 0.3333) {
    return "You chose rock, the computer chose paper, you lose!";
  } else if (string === "rock" && compChoice >= 0.6667) {
    return "You chose rock, the computer chose scissors, you win!";
  } else if (string === "paper" && compChoice < 0.3333) {
    return "You chose paper, the computer chose rock, you win!";
  } else if (string === "paper" && compChoice >= 0.3333) {
    return "You chose paper, the computer chose paper, it's a tie!";
  } else if (string === "paper" && compChoice >= 0.6667) {
    return "You chose paper, the computer chose scissors, you lose!";
  } else if (string === "scissors" && compChoice < 0.3333) {
    return "You chose scissors, the computer chose rock, you lose!";
  } else if (string === "scissors" && compChoice >= 0.3333) {
    return "You chose scissors, the computer chose paper, you win!";
  } else if (string === "scissors" && compChoice >= 0.6667) {
    return "You chose scissors, the computer chose scissors, it's a tie!";
  } else {
    return "Choose rock, paper or scissors!";
  }
}

console.log(playerChoice("rock"));
