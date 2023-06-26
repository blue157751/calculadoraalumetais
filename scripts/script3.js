 //Capturando o evento
 const formularioTres = document.querySelector('#formularioCalcPecas');

 formularioTres.addEventListener('submit' , function(eventoTres) {
 eventoTres.preventDefault();
 
 const inputLargura = eventoTres.target.querySelector('#largura');
 const inputEspessura = eventoTres.target.querySelector('#espessura');
 
 const largura = Number(inputLargura.value);
 const espessura = Number(inputEspessura.value);
 
 if (!largura) {
     setResultadoTres('Largura inválida' , false);
     return;
 }
 
 if (!espessura) {
     setResultadoTres('Espessura inválida', false);
     return;
 }
 
 const calcTres = getCalcTres(largura, espessura);
 
 const msg = `Em 1KG de ${largura} x ${espessura} vem aproximadamente: ${calcTres} peças`
 
 setResultadoTres(msg, true);
 
 });
 
 function getCalcTres(largura, espessura) {
     const calcTres = 1000 / (largura * largura * espessura / 471570);
     return Math.round(calcTres / 10) / 100;
 }
 
 function criaP () {
     const p = document.createElement('p');
     return p;
 }
 
 function setResultadoTres (msg , isValid) {
     const resultadoTres = document.querySelector('#resultadoTres');
     resultadoTres.innerHTML = '';
 
     const p = criaP();
     p.innerHTML = msg
     resultadoTres.appendChild(p);
 }