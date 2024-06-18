document.getElementById('botao').addEventListener('click', function() {
    var textoInput = document.getElementById('textoInput').value;

    var novoElemento = document.createElement('div');

    novoElemento.textContent = textoInput;

    var paragrafo = document.getElementById('novoParagrafo');

    paragrafo.appendChild(novoElemento);
});
