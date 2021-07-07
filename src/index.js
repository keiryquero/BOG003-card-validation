//import validator from './validator.js';

//console.log(validator);
function validar() {
  //1. recibe el numero
  let numero = document.getElementById("tarjeta").value;
  console.log(numero);
  console.log(typeof numero);
   if (numero.length >= 13) {
    if (numero.length <= 16) {
      console.log('el numero es correcto');
    } else {
      console.log('el numero es incorrecto');
    }
  } else {
    console.log('el numero es incorrecto');
  }
}
  
function botonVista() {
  console.log("Funcion Boton Vista");
  //1. Ocultar primera Vista
  document.getElementById("primeraVista").style.display = "none";
  //2. Mostrar Mi segunda Vista
  document.getElementById("segundaVista").style.display = "block";

}