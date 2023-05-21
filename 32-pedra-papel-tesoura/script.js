const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("#result");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function playRound(playerSelection) {
	const computerSelection = computerPlay();
	const winner = getWinner(playerSelection, computerSelection);

	result.textContent = `Você escolheu ${playerSelection}. O computador escolheu ${computerSelection}.${winner}`;
}

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

function getWinner(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "Empate!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		return "Você venceu!";
	} else {
		return "O computador venceu!";
	}
}