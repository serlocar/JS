/*
Constantes
*/
const SALUDO ="HOLA ";
/*
Variables
*/
//Acceso al Node btn1 del Dom
var oBtn1 = document.querySelector('#btn1');
//Acceso al Node nombre del Dom
var oNombre = document.querySelector('#nombre');
//Acceso al Node respuesta del Dom
var oRespuesta = document.querySelector('#respuesta');
/*
Funciones
*/ 
function saludar (){
    let sSALUDO = SALUDO;
    sSALUDO += oNombre.value;
    oRespuesta.innerHTML = sSALUDO;
}
oBtn1.onclick = saludar;

console.dir(oBtn1);
console.dir(oNombre);
console.dir(oRespuesta);