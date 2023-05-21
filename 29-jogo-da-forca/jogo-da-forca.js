// Palavras possíveis para o jogo
var palavras = ["banana", "laranja", "maçã", "limão", "abacaxi"];

// Seleciona uma palavra aleatória
var palavra = palavras[Math.floor(Math.random() * palavras.length)];

// Array para armazenar as letras adivinhadas
var letrasAdivinhadas = [];

// Número de tentativas restantes
var tentativasRestantes = 10;

// Loop para criar as caixas para cada letra da palavra
for (var i = 0; i < palavra.length; i++) {
  letrasAdivinhadas.push("_");
}

// Função para verificar se a letra adivinhada está na palavra
function verificarLetra() {
  var letra = document.getElementById("letra").value.toLowerCase();
  document.getElementById("letra").value = "";
  var acertou = false;
  for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      letrasAdivinhadas[i] = letra;
      acertou = true;
    }
  }
  if (!acertou) {
    tentativasRestantes--;
    if (tentativasRestantes === 0) {
      alert("Fim de jogo! A palavra era " + palavra);
      reiniciarJogo();
    }
  }
  if (letrasAdivinhadas.indexOf("_") === -1) {
    alert("Parabéns! Você venceu! A palavra era " + palavra);
    reiniciarJogo();
  }
  atualizarJogo();
}

// Função para atualizar o jogo na tela
function atualizarJogo() {
  document.getElementById("palavra").textContent = letrasAdivinhadas.join(" ");
  document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativasRestantes;
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  palavra = palavras[Math.floor(Math.random() * palavras.length)];
  letrasAdivinhadas = [];
  tentativasRestantes = 10;
  for (var i = 0; i < palavra.length; i++) {
    letrasAdivinhadas.push("_");
  }
  atualizarJogo();
}

// Event listener para capturar o envio do formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  verificarLetra();
});

// Inicia o jogo
atualizarJogo();