var Horas = {
  DOS: "hora de comer",
  CUATRO: "hora de dormir",
  OCHO: "hora de dormir más"
};

var botondos = document.getElementById("DOS")
var botoncuatro = document.getElementById("CUATRO")
var botonocho = document.getElementById("OCHO")

botondos.addEventListener("click", dos);
botoncuatro.addEventListener("click", cuatro);
botonocho.addEventListener("click", ocho);


function dos(){
  alert("Es " + Horas.DOS);
}

function cuatro(){
  alert("Es " + Horas.CUATRO);
}
function ocho(){
  alert("Es " + Horas.OCHO);
}

document.addEventListener("keyup", teclaArriba);

function teclaArriba(tecla)
{
console.log("La tecla que oprimiste fue " + tecla.code + " " + "Codigo " + tecla.keyCode)
}
