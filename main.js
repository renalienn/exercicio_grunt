const botao = document.getElementById('botao');
const texto = document.getElementById('texto');

botao.addEventListener('click', () => {
    texto.textContent = 'Interação realizada com sucesso!';
});