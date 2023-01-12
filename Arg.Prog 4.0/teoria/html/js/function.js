/**
console.log ("Hola mundo");

let numero1= 3;
let numero2= 4;
let resultado= numero1+numero2;

console.log("La suma es: "+resultado)  */

document.getElementById('boton').onclick = function ()
{
    console.log("se captura el click");
    document.getElementById('demo').innerHTML = "cambia el texto";
}