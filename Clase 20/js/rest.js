/*
fetch("https://apis.datos.gob.ar/georef/api/provincias")
.then(function(res) {
    return res.json();
})
.then(function(datos) {
    let inputSelect = document.querySelector("#provincia");

    datos.provincias.forEach((provincia) => {
        console.log(provincia);
       inputSelect.innerHTML+= `<option value="${ provincia.id}">${ provincia.nombre}</option>`;
    });
  })
  .catch(function(err) {
    console.error(err);r;
});
*/
/*
fetch("https://api.giphy.com/v1/gifs/search?api_key=P1Kb0LGaxh0eZeg5P8Toa1MlnPnXmmn8&q=lord+of+the+rings&limit=25&offset=0&rating=g&lang=en")
.then(function(res) {
    return res.json();
})
.then(function(datos) {
    let listadoGifs = document.querySelector(".listado-gifs");

    datos.data.forEach((gif) => {
        listadoGifs.innerHTML+= `<img src="${ gif.images.original.url}">`;
  
    });
  })
  .catch(function(err) {
    console.error(err);r;
});
*/
/*
//METODO GET
fetch("https://reqres.in/api/users").then(function(response){
  return response.json();
}).then(function(users){
    console.log(users.data);
    users.data.forEach((user)=>{
        console.log(user.first_name+" "+user.last_name);
    })
});
*/
let inputName= document.querySelector("#name");
let inputJob= document.querySelector("#job");
let formulario= document.querySelector("#formulario");

formulario.addEventListener("submit",function(event){
    event.preventDefault();


//METODO POST
fetch("https://reqres.in/api/users",{
    method:"POST",
    headers:{
        contentType:"application/json",
    },
    body:JSON.stringify({
        name:inputName.value ,
        job: inputJob.value,
    })
}).then(function(response){
   return response.json();
    })
    .then(function(user){
        console.log(user);
});
})