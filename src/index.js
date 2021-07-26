import validator from './validator.js';
//input del numero de la tarjeta
let input = document.getElementById("inputNumero");


//invoca la funcion del boton validar 
document.getElementById("validar").addEventListener("click", () => {
  let valido = validator.isValid(input.value);
  
  // si el modulo de valido es 0 muestra mensaje tarjeta valida sino mensaje invalido
  if (valido) {
   
    document.getElementById("mensaje").style.display = "block";
    let mascara= validator.maskify(input.value);
    input.value= mascara;
    } else {
    document.getElementById("mensaje2").style.display = "block";
    let mascara2 = validator.maskify(input.value);
    input.value= mascara2;
  }
})

// Limpia el imput para validar otra tarjeta
document.getElementById("limpiar").addEventListener("click", () => {
  input.value = "";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("mensaje2").style.display = "none";
})

//Finaliza la validación y muestra mensaje 
  document.getElementById("Fin").addEventListener("click", () => {
  document.getElementById("segundaVista").style.display = "none";
  document.getElementById("terceraVista").style.display = "block";

})
//Finaliza el proceso y regresa a la pagina principal
document.getElementById("Fin2").addEventListener("click", () => { 
  document.getElementById("primeraVista").style.display = "block";
  document.getElementById("terceraVista").style.display = "none";
  input.value = "";

 })




// invoca la funcion del boton comprar
document.getElementById("botonComprar").addEventListener("click", () => { comprar() })


function comprar() {
  //1. Ocultar primera Vista
  document.getElementById("primeraVista").style.display = "none";
  //2. Mostrar Mi segunda Vista
  document.getElementById("segundaVista").style.display = "block";

}
