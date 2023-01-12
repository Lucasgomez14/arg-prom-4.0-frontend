document.getElementById('sumar').addEventListener('click', function()
{
    let numeroA= document.getElementById('numero1').value;
    let numeroB= document.getElementById('numero2').value;
    console.log("Wl valor dle numero a es:"+numeroA);
    console.log("Wl valor dle numero a es:"+numeroB);
    let resultado = sumar(parseInt(numeroA),parseInt (numeroB));
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedor_resultado').style.display = 'block';
}
)

function sumar(a,b)
{
    return a + b;
}