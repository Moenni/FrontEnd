let primeraPromesa= new Promise((resuelta, rechazada)=>{
    let numero = 50;

    setTimeout(()=>{
        if(numero>1){
            resuelta({
                mensaje: "El numero es mayor a 1",
            })
        }else{
            rechazada({
                mensaje: "El numero es menor a 1",
            });
        }
    },3000);

});
/*
primeraPromesa.then((respuesta)=>{
   console.log("estoy desenvolviendo una promesa"); 
   console.log(respuesta);
});
*/
/*
primeraPromesa.then((respuesta)=>{
    console.log("Estoy desenvolviendo una promesa RESUELTA" );
    console.log(respuesta);
}).catch((error)=>{
    console.log("estoy desenvolviendo una promesa RECHAZADA");
    console.log(error);
})
*/
let provincias =fetch('https://apis.datos.gob.ar/georef/api/provincias');
console.log(provincias);

provincias.then((contenido)=>{
console.log(contenido);
})