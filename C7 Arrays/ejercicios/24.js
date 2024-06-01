function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  
  var array = [];
  var suma = num;
  for (let i = 0; i < 10; i++) {
    //Omitir la iteración cuando i es igual a 5
    if(i === 5){
      continue;
    } else {
      //incrementar el numero + 2
      suma += 2
      array.push(suma)
    }
  }
  return array
  
}

module.exports = continueStatement;
