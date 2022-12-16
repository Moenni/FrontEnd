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
