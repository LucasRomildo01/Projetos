let celsius = 0 //transformei em numero
let fahrenheit = 0  //transformei em numero
let kelvin = 0 //transformei em numero

function convertTemp() {
    // Pegando o valor digitado pelo usuário
    const celsius = parseFloat(document.getElementById("temp").value);
  
    // celsius para f
    const fahrenheit = (celsius* 1.8) + 32;
  
    // Convertendo Celsius para Kelvin
    const kelvin = celsius + 273.15;
  
    // Exibindo o resultado na página
    const result = document.getElementById("result");
    result.innerHTML = `${celsius} Grau Celsius é = ${fahrenheit.toFixed(2)}&deg;Fahrenheit e  ${kelvin.toFixed(2)}Kelvin`;
  }