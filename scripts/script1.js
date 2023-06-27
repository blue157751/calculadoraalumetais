//Capturando o evento de submit a calculadora de peças
const formularioUm = document.querySelector('#formularioCalcPecas');

formularioUm.addEventListener('submit' , function(eventoUm) {
    eventoUm.preventDefault();

    const inputLargura = eventoUm.target.querySelector('#largura');
    const inputEspessura = eventoUm.target.querySelector('#espessura');
    const inputPecas = eventoUm.target.querySelector('#pecas');

    const largura = Number(inputLargura.value);
    let espessura = inputEspessura.value.replace(',', '.');
    if (!espessura.includes('.')) {
        espessura = espessura.slice(0, 1) + '.' + espessura.slice(1);
    }
    espessura = Number(espessura);
    const pecas = Number(inputPecas.value);

    console.log(largura, espessura, pecas);

    if (!largura) {
        setResultadoUm('Largura inválida' , false);
        return;
    }

    if (!espessura) {
        setResultadoUm('espessura inválida', false);
        return;
    }

    if (!pecas) {
        setResultadoUm('Numero de Peças inválido', false);
        return;
    }
    
    const calcUm = getCalcUm(largura, espessura, pecas);
    const msg = `${calcUm} Kg`
    setResultadoUm(msg, true);
});

function getCalcUm (largura, espessura, pecas) {
 const calcUm = largura * largura * espessura / 471570 * pecas;
 return calcUm.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultadoUm (msg , isValid) {
    const resultadoUm = document.querySelector('#resultadoUm');
    resultadoUm.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg
    resultadoUm.appendChild(p);
}
