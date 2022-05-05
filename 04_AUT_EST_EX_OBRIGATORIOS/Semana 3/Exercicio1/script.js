
function calcular(){ 
var vi = window.document.getElementById('vi').value;
var altura = document.querySelector('div#altura')
var h = vi*vi/20
altura.innerHTML =`Altura maxima: ${h} metros`
var tempo = document.querySelector('div#tempo')
var t = vi/10
tempo.innerHTML =`Tempo total de subida do objeto: ${t} segundos`



}