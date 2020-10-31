let userScore = 0;
let compScore = 0;
const userScore2 = document.querySelector(".p-score");
const compScore2 = document.querySelector(".c-score");
const scoreBoard = document.querySelector(".scoreboard");
const message = document.querySelector(".message");
const rock = document.querySelector(".r-image");
const paper = document.querySelector(".p-image");
const scissors = document.querySelector(".s-image");

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

function win(user, computer) {
  userScore++;
  userScore2.innerHTML = userScore;
  compScore2.innerHTML = compScore;
  message.textContent = `You chose ${convert(user)}, Computer chose ${convert(computer)}, You Win!`
}

function lose(user, computer) {
  compScore++;
  compScore2.innerHTML = compScore;
  userScore2.innerHTML = userScore;
  message.textContent = `You chose ${convert(user)}, Computer chose ${convert(computer)}, You Lose!`
}

function tie(user, computer) {
  compScore2.innerHTML = compScore;
  userScore2.innerHTML = userScore;
  message.textContent = `You chose ${convert(user)}, Computer chose ${convert(computer)}, it's a Tie!`
}






console.log(getUserChoice());
// message.textContent = player();
