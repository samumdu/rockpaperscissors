const rockPaperScissors = ["rock", "paper", "scissors"];

//console.log(rockPaperScissors[computerChoice]);

//Play button
document.querySelector(".play").addEventListener("click", () => {
  let computerChoice = Math.trunc(Math.random() * 3);
  computerChoice = rockPaperScissors[computerChoice];

  const playerOption = document.querySelector(".player-option").value;

  // Option
  document.querySelector(
    ".computer"
  ).textContent = `Computer's: ${computerChoice}`;
  document.querySelector(".players").textContent = `Player's: ${playerOption}`;
  //   console.log(`Computers choice: ${computerChoice}`);
  //   console.log(`Players choice: ${playerOption}`);

  if (playerOption === computerChoice) {
    document.querySelector(".winner").textContent = "It´s a tie! 🟰";
  } else if (playerOption === "scissors" && computerChoice === "paper") {
    document.querySelector(".winner").textContent = "You won! 🎉";
  } else if (playerOption === "paper" && computerChoice === "rock") {
    document.querySelector(".winner").textContent = "You won! 🎉";
  } else if (playerOption === "rock" && computerChoice === "scissors") {
    document.querySelector(".winner").textContent = "You won! 🎉";
  } else {
    document.querySelector(".winner").textContent = "You lose! ❌";
  }
});
