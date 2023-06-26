//Capturando o evento
const formularioDois = document.querySelector('#formularioMaoDeObra');

formularioDois.addEventListener('submit' , function(eventoDois) {
eventoDois.preventDefault();

const inputSucata = eventoDois.target.querySelector('#sucata');
const inputRefile = eventoDois.target.querySelector('#refile');

const sucata = Number(inputSucata.value);
const refile = Number(inputRefile.value);

if (!sucata) {
    setResultadoDois('Peso da Sucata inválido' , false);
    return;
}

if (!refile) {
    setResultadoDois('Peso do Refile inválido', false);
    return;
}

const calcDois = getCalcDois(sucata, refile);

const msg = `O cliente pode levar ${calcDois} Kg na mão de obra.`

setResultadoDois(msg, true);

});

function getCalcDois (sucata, refile) {
 const calcDois = (sucata - ( sucata * (10 /100))) + (refile - (refile * (35 / 100)));
 return calcDois.toFixed(2);

}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultadoDois (msg , isValid) {
    const resultadoDois = document.querySelector('#resultadoDois');
    resultadoDois.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg
    resultadoDois.appendChild(p);
}