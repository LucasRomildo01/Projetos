function mostrarSenha(){
    var inputPass = document.getElementById('campoSenha')
    var btncShowPass = document.getElementById('btn-senha') //guardou o icone

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text') //mudar o tipo de password para text
        btncShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill') //troco os dois icones ao clicar
    }else{
        inputPass.setAttribute('type','password')
        btncShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill') //para voltar
    }
};

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('form'); //só da para usar com form
    if(mode.classList.contains('bi-sun-fill')) {
        mode.classList.remove('bi-sun-fill');
        mode.classList.add('bi-moon-stars-fill');

        form.classList.add('light');
        return;
    }
        mode.classList.add('bi-sun-fill');
        mode.classList.remove('bi-moon-stars-fill');
        form.classList.remove('light');
});