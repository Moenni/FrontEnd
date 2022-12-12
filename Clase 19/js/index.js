let primeraPromesa= new Promise((resuelta, rechazada)=>{
    let numero = 50;
    if(numero>1){
        resuelta({
            mensaje: "El numero es mayor a 1",
        })
    }else{
        rechazada({
            mensaje: "El numero es menor a 1",
        });
    }
});
primeraPromesa.then((respuesta)=>{
   console.log("estoy desenvolviendo una promesa"); 
   console.log(respuesta);
});

primeraPromesa
