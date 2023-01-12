/* 
Esto hace que por cada click se realice la funcion function()
document.addEventListener('click', function()
{
    console.log("gol deboca");
    document.getElementById('demo').innerHTML = "cambia el texto";
})
*/
//Hace que solo en el boton se realice la function
document.getElementById('boton').addEventListener('click', function()
{
    console.log("gol deboca");
    document.getElementById('demo').innerHTML = "cambia el texto";
}
);

document.getElementById('boton_color').addEventListener('click', function()
{
   document.body.style.backgroundColor = '#FF0000'; 
}
);

document.getElementById('boton_default').addEventListener('click', function()
{
   document.body.style.backgroundColor = 'blue'; 
   document.getElementById('demo').style.display = 'block';
   
}
);

document.getElementById('boton_ocultar').addEventListener('click', function()
{
   document.getElementById('demo').style.display = 'none';
}
);

const collection = document.getElementsByClassName("prueba");
for (let i= 0; i < collection.length; i++)
{
    collection[i].style.backgroundColor = "yellow";
}