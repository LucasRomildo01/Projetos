// Definir as perguntas e respostas:
const questions = [
	{
		question: "Qual é a capital da França?",
		choices: ["Londres", "Paris", "Madrid", "Berlim"],
		answer: "Paris"
	},
	{
		question: "Qual é a montanha mais alta do mundo?",
		choices: ["Everest", "K2", "Makalu", "Lhotse"],
		answer: "Everest"
	},
	{
		question: "Quem pintou a Mona Lisa?",
		choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
		answer: "Leonardo da Vinci"
	},
	{
		question: "Qual é o maior país do mundo?",
		choices: ["Rússia", "China", "Estados Unidos", "Canadá"],
		answer: "Rússia"
	},
	{
		question: "Qual é a capital do Brasil?",
		choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
		answer: "Brasília"
	}
];

// Definir variáveis:
let currentQuestion = 0;
let score = 0;

// Obter elementos HTML:
const questionText = document.getElementById("question");
const choicesContainer = document.getElementById("choices");

// Função para exibir a pergunta atual:
function showQuestion() {
	// Obter a pergunta atual:
	const question = questions[currentQuestion];

	// Exibir a pergunta:
	questionText.textContent = question.question;

	// Limpar as opções de resposta anteriores:
	choicesContainer.innerHTML = "";

	// Exibir as opções de resposta:
	question.choices.forEach(function(choice) {
		const choiceElement = document.createElement("button");
		choiceElement.textContent = choice;
		choiceElement.addEventListener("click", function() {
			checkAnswer(choice);
		});
		choicesContainer.appendChild(choiceElement);
	});
}

// Funçãopara verificar a resposta do usuário:
function checkAnswer(answer) {
	// Obter a resposta correta:
	const question = questions[currentQuestion];
	const correctAnswer = question.answer;

	// Verificar se a resposta do usuário está correta:
	if (answer === correctAnswer) {
		score++;
	}

	// Avançar para a próxima pergunta:
	currentQuestion++;

	// Verificar se há mais perguntas:
	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		endGame();
	}
}

// Função para exibir a pontuação final:
function endGame() {
	// Exibir a pontuação final:
	const finalScore = `Você acertou ${score} de ${questions.length} perguntas.`;
	questionText.textContent = finalScore;

	// Ocultar as opções de resposta:
	choicesContainer.innerHTML = "";

	// Ocultar o botão "Next Question":
	const nextButton = document.querySelector("button");
	nextButton.style.display = "none";
}

// Função para avançar para a próxima pergunta:
function nextQuestion() {
	if (currentQuestion < questions.length) {
		showQuestion();
	}
}

// Exibir a primeira pergunta:
showQuestion();