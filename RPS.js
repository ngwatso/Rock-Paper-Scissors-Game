let userScore = 0;
let compScore = 0;
const userScore2 = document.querySelector(".p-score");
const compScore2 = document.querySelector(".c-score");
const scoreBoard = document.querySelector(".scoreboard");
const message = document.querySelector(".message");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getUserChoice() {
  rock.addEventListener('click', function() {
    game("r");
  })
  
  paper.addEventListener('click', function() {
    game("p");
  })
  
  scissors.addEventListener('click', function() {
    game("s");
  })
}

function getComputerChoice() {
  const choice = ['r', 'p', 's'];
  const random = Math.floor(Math.random() * 3);
  return choice[random];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function convert(letter)  {
  if(letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore2.innerHTML = userScore;
  compScore2.innerHTML = compScore;
  message.textContent = `You chose ${convert(userChoice)}, Computer chose ${convert(computerChoice)}, You Win!`
  let user = document.getElementById(userChoice);
  user.classList.add('green-glow');
}

function lose(userChoice, computerChoice) {
  compScore++;
  compScore2.innerHTML = compScore;
  userScore2.innerHTML = userScore;
  message.textContent = `You chose ${convert(userChoice)}, Computer chose ${convert(computerChoice)}, You Lose!`
}

function tie(userChoice, computerChoice) {
  compScore2.innerHTML = compScore;
  userScore2.innerHTML = userScore;
  message.textContent = `You chose ${convert(userChoice)}, Computer chose ${convert(computerChoice)}, it's a Tie!`
}






console.log(getUserChoice());
// message.textContent = player();
