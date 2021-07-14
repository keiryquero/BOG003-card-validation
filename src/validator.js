const validator =
{
  isValid: function (creditCardNumber) {
    //pasa un satring a un array
    let nunCard = creditCardNumber.split("");
    //revertir los numeros del array
    let nunCardreversed = nunCard.reverse();
    let newArray = [];
    // ciclo para recorrer un array
    for (var i = 0; i < nunCardreversed.length; i++) {
      newArray.push(nunCardreversed[i]);
      // permite validar la posicion impar
      if (i % 2 == 1) {
        nunCardreversed[i] = nunCardreversed[i] * 2
        var nuevoNum = nunCardreversed[i];
        if(nuevoNum >= 10){
          //nuevoNum = nuevoNum.toString();
          //nuevoNum.split("", "");
        console.log(nuevoNum);
        }
        
      }

      console.log(newArray);
    }
  }
}

export default validator;
