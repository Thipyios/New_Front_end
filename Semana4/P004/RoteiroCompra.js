document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.roteiro-comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const roteiro = this.parentElement;
            const titulo = roteiro.querySelector('.roteiro-destino h3').textContent;
            const pacote = roteiro.querySelectorAll('.roteiro-incluso li');
            const valor = roteiro.querySelector('.roteiro-preco').textContent;
            const comentarios = roteiro.querySelector('.roteiro-obs').textContent;
            const formaPagamento = roteiro.querySelector('.roteiro-parcelamento').textContent;
            const imagem = roteiro.querySelector('.postal').getAttribute('src');

            const pacoteTuristico = {
                titulo: titulo,
                pacote: Array.from(pacote).map(item => item.textContent),
                valor: valor,
                comentarios: comentarios,
                formaPagamento: formaPagamento,
                imagem: imagem
            };

            console.log(pacoteTuristico);
        });
    });

    function inserirRoteiro() {
        const formulario = document.getElementById('formulario');
        const containerDestinos = document.getElementById('container-destinos');

        const novoRoteiro = document.createElement('div');
        novoRoteiro.classList.add('roteiros-viagens');

        const titulo = formulario.querySelector('#titulo').value;
        const pacote = formulario.querySelector('#Pacote').value.split('\n');
        const valor = formulario.querySelector('#Valor').value;
        const comentarios = formulario.querySelector('#Comentarios').value;
        const formaPagamento = formulario.querySelector('#FormaPagamento').value;
        const imagem = formulario.querySelector('#imagem').value;

        novoRoteiro.innerHTML = `
            <img src="${imagem}" class="postal">
            <div class="roteiro-destino"><h3>${titulo}</h3></div>
            <ul class="roteiro-incluso">
                ${pacote.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div class="roteiro-preco">${valor}</div>
            <div class="roteiro-obs">${comentarios}</div>
            <div class="roteiro-parcelamento">${formaPagamento}</div>
            <button class="roteiro-comprar">COMPRAR</button>
        `;

        containerDestinos.appendChild(novoRoteiro);
    }
});