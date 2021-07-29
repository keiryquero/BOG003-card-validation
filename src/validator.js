const validator =
{
  isValid: function (creditCardNumber) {

    //pasa un satring a un array
    let nunCard = creditCardNumber.split("");
    //invierte los números del array
    let nunCardreversed = nunCard.reverse();
    let acumSuma = 0;
    let acumSumaPar = 0;
    let result = 0;
    let totalSuma = 0;

    // ciclo para recorrer un array
    for (var i = 0; i < nunCardreversed.length; i++) {
      // permite validar la posicion impar
      if (i % 2 === 1) {
        nunCardreversed[i] = nunCardreversed[i] * 2
        var nuevoNum = nunCardreversed[i];
        if (nuevoNum > 9) {
          nuevoNum = nuevoNum - 9;
          acumSuma = acumSuma + nuevoNum;
        }
        result = result + nuevoNum;
      }
      if (i % 2 === 0) {
        let positionPar = parseInt(nunCardreversed[i]);
        acumSumaPar = acumSumaPar + positionPar;

      }
      totalSuma = result + acumSumaPar;


    }
    if (totalSuma % 10 == 0) {
      return true;

    } else {
      return false;

    }
  },
  maskify: function (creditCardNumber) {
    let numTarjeta = creditCardNumber.length;
    let num = creditCardNumber;
    if (numTarjeta < 4) {
      return num;
      //console.log (typeof num);
    } else {
      for (var i = 0; i < numTarjeta - 4; i++) {
        if (i < creditCardNumber.length) {
          var cadena1 = creditCardNumber.slice(-4);
          var cadena2 = "#";
          var cadena3 = cadena2.repeat(numTarjeta - 4) + cadena1;
          return cadena3
          //console.log(cadena3);
        }

      }

    }



  }


}




export default validator;
