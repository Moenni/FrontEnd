//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
/*cambiar de color los parrafos , sale alerta para elegir */
window.addEventListener("load",function(){
    let botones = document.querySelectorAll(".w3-button")

    for(let i =0;i<botones.length;i++){
        botones[i].addEventListener("click",function(){
          this.style.color = prompt("choose your color"); 
    })
    }
})
/*al presionar una tecla salta una alerta */
window.addEventListener("keypress",function(e){
  if(e.key=="Enter"){
    alert("Ey! que tocas enter?");
  }
    /*alert(1);*/
})


/* al hacer clic en titulo , sale una alerta */
window.addEventListener("load",function(){
    let tituloFeo= document.querySelector(".titulo-feo")

    tituloFeo.addEventListener("click", function(){
        alert("Has presionado el botón de Titulo")
    })
})
/*al hacer click en el logo sale una alerta */
window.addEventListener("load",function(){
    let logoYoutube = document.querySelector(".logo")
    
    logoYoutube.addEventListener("click", function(){
        alert("No carga el logo Youtube")
    })
})
//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"


//3- Quitarle al titulo la clase que le está dando un formato feo


//4- Chequear si el link a youtube posee o no el atributo href


//5- Obtener el href del link a wikipedia y mostrarlo por consola
