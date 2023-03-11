const today = new Date();
// nessa função eu pego o valor contido no parametro dt
function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
var data = queryString("dt");
function reiniciar(){
    window.location.href = "http://127.0.0.1:5500/";
}
function acabou(){
    alert('chegou o dia desejado!');
    window.location.href = "http://127.0.0.1:5500/";
}

// função pra se o ano é bisexto
function eh_bissexto(ano){
    if(ano % 400 == 0)
        return true;
    else if(ano % 100 == 0)
        return false;
    else if(ano % 4 == 0)
        return true;
    else
        return false;
    }

// preciso pegar o mes e o ano passar para dia e calcular a diferença
var dia = data.substring(8);
var dia = parseInt(dia);
var mes = data.substring(5,7);
var mes = parseInt(mes);
var mesHoje = today.getMonth() + 1;
var ano = data.substring(0,4)
var ano = parseInt(ano)
var anoHoje = today.getFullYear()

while(ano != anoHoje | mes != mesHoje){
    if (eh_bissexto(ano)){
        if (mes == mesHoje){
            dia = dia + 366;
            ano--;
        }
        else if(mes > mesHoje){
            if(mes == 2)
                dia = dia + 29;
            else if((mes > 8 & mes % 2 == 1) | (mes < 8 & mes % 2 == 0))
                dia = dia + 30;
            else
                dia = dia + 31;
            mes--;
        }
        else{
            if(mes == 2)
                dia = dia + 29;
            else if((mes > 8 & mes % 2 == 1) | (mes < 8 & mes % 2 == 0))
                dia = dia + 30;
            else
                dia = dia + 31;
            mes++;
        }
    }else{
        if (mes == mesHoje){
            dia = dia + 365;
            ano--;
        }
        else if(mes > mesHoje){
            if(mes == 2)
                dia = dia + 28;
            else if((mes > 8 & mes % 2 == 1) | (mes < 8 & mes % 2 == 0))
                dia = dia + 31;
            else
                dia = dia + 30;
            mes--;
        }
        else{
            if(mes == 2)
                dia = dia + 28;
            else if((mes > 8 & mes % 2 == 1) | (mes < 8 & mes % 2 == 0))
                dia = dia + 30;
            else
                dia = dia + 31;
            mes++;
        }
    }
}

var diaHoje = today.getDate();
var hora = today.toLocaleTimeString();
var min = hora.substring(3,5);
var seg = hora.substring(6)
hora = hora.substring(0,2);
hora = parseInt(hora);
min = parseInt(min);
seg = parseInt(seg);

var deltaDia = dia - diaHoje;
var deltaHora = 24 - hora;
var deltaMin = 60 - min;
var deltaSeg = 60 - seg;

if(hora > 0){
    deltaDia--;
}
if(min > 0){
    deltaHora--;
}
if(seg > 0){
    deltaMin--;
}
function contador(){
if(deltaDia < 0){
    deltaDia = 0
}
if(deltaHora == 24 | deltaHora < 0){
    deltaHora = 0;
}
if(deltaMin == 60 | deltaMin < 0){
    // deltaHora = 0;
    deltaMin = 0
}
if(deltaSeg == 60 | deltaSeg < 0){
    deltaSeg = 0
}
if(deltaSeg == 0){
    deltaMin--;
    deltaSeg = 59;
}
if(deltaMin == 0){
    deltaHora--;
    deltaMin = 59;
}
if(deltaHora == 0){
    deltaDia--;
    deltaHora = 23;
}
if(deltaDia == 0 & deltaHora == 0 & deltaMin == 0 & deltaSeg == 0){
    acabou();
}

deltaSeg--;

var numeroDia = document.getElementById('dia');
numeroDia.textContent = deltaDia;
var numeroHora = document.getElementById('hora');
numeroHora.textContent = deltaHora;
var numeroMin = document.getElementById('min');
numeroMin.textContent = deltaMin;
var numeroSeg = document.getElementById('seg');
numeroSeg.textContent = deltaSeg;
}
setInterval(contador, 1000);

// falta fazer o contador atualizar