import validator from './validator.js';
//input del numero de la tarjeta
let input = document.getElementById("inputNumero");
/*input.addEventListener('keyup', () => {
  //la etiqueta cambia a valor
     let valorInput =input.value;
     //console.log(typeof valorInput);
     validator.isValid(valorInput);
     
      });*/
   //invoca la funcion del boton validar   
document.getElementById("validar").addEventListener("click", () => { validator.isValid(input.value) })
// invoca la funcion del boton comprar
document.getElementById("botonComprar").addEventListener("click", () => { comprar() })

function comprar() {
  //1. Ocultar primera Vista
  document.getElementById("primeraVista").style.display = "none";
  //2. Mostrar Mi segunda Vista
  document.getElementById("segundaVista").style.display = "block";

}