function calcularMedia() {
let nota1 = document.getElementById('nota1').value;
let nota2 = document.getElementById('nota2').value;
let nota3 = document.getElementById('nota3').value;
let resultado = document.getElementById('resultado');

const  nota = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
console.log(nota)

    if(nota >= 7){
        console.log('aprovado')
        resultado.innerText= `Sua Média é ${nota.toFixed(1)}, você foi APROVADO!!!`
    } else {
        resultado.innerText= `Sua Média é ${nota.toFixed(1)}, você está REPROVADO`
    }
};


