//Essa primeira parte do codigo coloca o atributo min no input que usa o calendario do google, pra sempre a data ser uma data futura.
var input = document.getElementById('data');
const today = new Date();

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aaaa/gi, matched => map[matched])
}
var mes = today.getMonth() + 1;
var dia = today.getDate();
var dia = dia + '';
var mes = mes + '';
if(dia.length == 1 & mes.length == 1){
    var hoje = formatDate(today, 'aaaa-0mm-0dd');
}
else if(mes.length == 1){
    var hoje = formatDate(today, 'aaaa-0mm-dd');
}
else if(dia.length == 1){
    var hoje = formatDate(today, 'aaaa-mm-0dd');
}
else{
    var hoje = formatDate(today, 'aaaa-mm-dd');
}
    
input.setAttribute('min',hoje);
// a primeira parte acaba aqui
// essa ultima parte é a função que bota a data na url
function dados(){
    var data = document.getElementById('data').value;
    // esse codigo aqui em baixo é a mesma coisa que o codigo comento a baixo dele
    var passaValor= function(valor){
    window.location = "http://127.0.0.1:5500/contador.html?dt="+valor;
    }
    // function passaValor(valor){
    //     window.location = "http://127.0.0.1:5500/contador.html?dt="+valor;
    // }
    passaValor(data);
}
