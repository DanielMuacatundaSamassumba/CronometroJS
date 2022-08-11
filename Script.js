var hora = document.querySelectorAll("h1")[0];
var Minutos = document.querySelectorAll("h1")[1];
var Segundos = document.querySelectorAll("h1")[2];
var btniniciar = document.querySelectorAll("button")[0]
var btnlimpar = document.querySelectorAll("button")[1];
var segundoi=0;
 var minutosi =1;
 var horai =1
 var stop;
function count (){
Segundos.innerText=segundoi;
segundoi++;
if(segundoi==60){
segundoi=0;
Minutos.innerText=minutosi;
minutosi++;
}
if(minutosi==60){
minutosi=0;
hora.innerText=horai;
horai++;
}
}
btniniciar.onclick=()=>{
  stop =setInterval(count,-1000);
}
btnlimpar.onclick=()=>{
clearInterval(stop);
}
