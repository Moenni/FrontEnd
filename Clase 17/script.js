function qs(elemento){
  return  document.querySelector(elemento);
}

let resultado = qs(".resultado");
let btnbajar = qs(".bajar");
let btnsubir = qs(".subir");
let display = qs("#display");
let inputText= qs("#prueba");
let btnconteo= qs(".conteo");
let btncronometro= qs(".cronometro");
let btnclear = qs(".clear");


//solo en la resta se pude pone -=1
btnbajar.addEventListener("click", function(){
    resultado.innerText-=1;
});
//en la suma se tiene que pasar la variable de string a numero y despues realizar la suma.
btnsubir.addEventListener("click", function(){
resultado.innerText= parseInt(resultado.innerText)+1;
} );
// ver si se esta tecleando algo
inputText.addEventListener("keydown",function(){
display.style.color="red";
} )
inputText.addEventListener("keyup",function(){
    display.style.color="black";
    } )
    //cuando hagamos click 

    btnconteo.addEventListener("click",function(){
      setTimeout(function(){
        alert("pasaron 5 segundos");
      },5000);
    });

