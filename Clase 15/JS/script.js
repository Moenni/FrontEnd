let nombre ="harry";

let titulo = document.querySelector("h1");
let button = document.querySelector("#boton");
/*
let unaFuncion= function(){
    return "esta es una función!";
}

titulo.innerText=`Hola ${unaFuncion()}`;
*/
titulo.classList.remove("pepe");

/*
if(titulo.classList.contains("sarasa")){
   titulo.classList.remove("sarasa");
}else{
   titulo.classList.add("sarasa");
}
*/

function swicthTitulo(){
    titulo.classList.toggle("rojo-subrayado");
}

function esconderTitulo(){
    titulo.classList.toggle("ocultar");
}