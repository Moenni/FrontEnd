let saludo= "Hola Mundo desde el archivo JS";
console.log( saludo);

let edad = parseInt(prompt("Ingrese su edad")); 

while(isNaN(edad)){
    alert("Usted ingreso un valor que no es numérico.");
    edad = parseInt(prompt("Ingrese su edad")); 
}
if(edad>=18){ 

console.log("Es mayor de edad"); 

}else{ 

console.log("Es menor de edad"); 

} 
let miObjeto = { 

    mensaje: "Mensaje de texto", 
    
    utilidad: "prueba de JS" 
    
    }; 
    
    let miArray = [ "Primer mensaje del array", "Segundo mensaje del array", "Tercer mensaje del array"] 
    
    console.table(miObjeto); 
    
    console.table(miArray); 

    let personaje={
        nombre: "Nicolas",
        apellido:"Momo",
        edad: 29
    }
    for(let caracteristica in personaje){
        console.log(personaje[caracteristica]);
    }