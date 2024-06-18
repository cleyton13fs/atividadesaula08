function trocarTexto(idElemento) {
    const elemento = document.getElementById(idElemento);
    const novoTexto = document.getElementById('novoTexto').value;

    if (elemento && novoTexto !== '') {
        elemento.textContent = novoTexto;

        document.getElementById('novoTexto').value = '';
    } else {
        console.error('ID do elemento ou novo texto não definidos.');
    }
}

