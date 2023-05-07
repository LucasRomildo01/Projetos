const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('form'); //só da para usar com form
    if(mode.classList.contains('bi-moon-fill')) {
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-brightness-high-fill');

        form.classList.add('dark');
        return;
    }
        mode.classList.add('bi-moon-fill');
        mode.classList.remove('bi-brightness-high-fill');
        form.classList.remove('dark');
});



let imageStatus = 1;

function changeImage() {
  let image = document.getElementById('imagem');
  if (imageStatus === 1) {
    image.src = "coinroxo.svg";
    imageStatus = 2;
    document.body.style.background = '#1A1D27';
  } else {
    image.src = "coinrosa.svg";
    imageStatus = 1;
    document.body.style.background = "pink";
  }
}

let numeros = [];
do {
  let numero = Math.floor(Math.random() * 61);
  if (!numeros.includes(numero)) {
    numeros.push(numero);
  }
} while (numeros.length < 60);
console.log(numeros);




function sortear() {
    const num1 = document.getElementById('n1').value;
    const num2 = document.getElementById('n2').value;
    const num3 = document.getElementById('n3').value;
    const num4 = document.getElementById('n4').value;
    const num5 = document.getElementById('n5').value;
    const num6 = document.getElementById('n6').value;
    
    const res = document.getElementById('resultado');
    const sorteio1 = parseInt(Math.random() * 61)
    const sorteio2 = parseInt(Math.random() * 61)
    const sorteio3 = parseInt(Math.random() * 61)
    const sorteio4 = parseInt(Math.random() * 61)
    const sorteio5 = parseInt(Math.random() * 61)
    const sorteio6 = parseInt(Math.random() * 61)
    const listaSorteio = [sorteio1, sorteio2, sorteio3, sorteio4, sorteio5, sorteio6]
    const listaNum = [num1, num2, num3, num4, num5, num6]
    
    var ganhou = false;
    
    var numerosorteado = []; //vira lista
    
    var totaldenumerosorteados = 0;
    
    
    
    listaSorteio.forEach((item)=>{
        listaNum.forEach((numero)=>{
        if(item == numero) {
            console.log(item)
            console.log(numero)
            ganhou = true;
            totaldenumerosorteados++ //soma +1 (totaldenumerosorteados = totaldenumerosorteados + 1)
            numerosorteado.push(numero)
        };
        }) ;
    });
    //para cada item da lista, executa tal coisa
    
        if (ganhou) {
            res.innerHTML = `
            Os números sorteados foram:<br><b>${sorteio1}</b> - <b>${sorteio2}</b> - <b>${sorteio3}</b> - <b>${sorteio4}</b> - <b>${sorteio5}</b> - <b>${sorteio6}</b> <br><br>
            Você acertou ${totaldenumerosorteados}, " ${numerosorteado.join(", ")}"` //transformando em uma string
    
        } else {
    
            res.innerHTML = `
            Os números sorteados foram:  <br><b>${sorteio1}</b> - <b>${sorteio2}</b> - <b>${sorteio3}</b> - <b>${sorteio4}</b> - <b>${sorteio5}</b> - <b>${sorteio6}</b> <br><br>
            Você perdeu :c `
        }
    
    return
    };
    