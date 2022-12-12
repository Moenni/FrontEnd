const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  var email= document.getElementById("email-input").value;
  // 2. Obtenemos los datos ingresados en el input de password
  var password= document.getElementById("password-input").value;
  // 3. Obtenemos el valor del input radio
  var legalAge= document.getElementsByName("legalAge");
  // 4. Obtenemos el valor del input checkbox
  var termsAndConditions = document.getElementById("tyc-input");
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  function chequearEdad(){
    legalAge.forEach(function(radio){
      let checked;
      if(radio.checked && radio.id=="age_no"){
       checked= false;
       alert("Debes ser mayor de edad para registrarte en el sitio");
      }else{
        checked= true;
      }
      return checked;
     });
    
  }
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  function validarTYCs(){
    if(termsAndConditions.checked==false){
      alert("Debes aceptar los TyCs para registrarte en el sitio");

    }
    return termsAndConditions;
  }
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  const datos={
    email:email,
    password:password,
    legalAge:chequearEdad(),
    tycAccepted:validarTYCs()
  }
  console.log(datos);
});
