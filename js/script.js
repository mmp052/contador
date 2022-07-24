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

function dados(){
     var data = document.getElementById('data').value;
     var passaValor= function(valor){
    window.location = "http://localhost/contador/contador.html?dt="+valor;
    }
    passaValor(data);
}
