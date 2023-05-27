const btnVerMais = document.querySelector('.btn-ver-mais');
const cardText = document.querySelector('.card-text');

btnVerMais.addEventListener('click', function() {
  if (cardText.classList.contains('card-text-expandido')) {
    cardText.classList.remove('card-text-expandido');
    btnVerMais.textContent = 'Ver Mais';
  } else {
    cardText.classList.add('card-text-expandido');
    btnVerMais.textContent ='Ver Menos';
  }
});