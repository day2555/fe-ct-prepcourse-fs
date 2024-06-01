function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var array = [];
  var suma = num;
  //la variable no puede ser let porque necesita vivir fuera de su scope para salir del for y validar
  for (var i = 0; i < 10; i++) {
    suma += 2;
    if (i === suma) {
      //Si lleg a ser igual se debe hacer el break
      break;
    } else {
      //Sino pusheo la suma
      array.push(suma)
    }
  }
  //Me salgo del for y valido:
    if (i < 10) {
      return "Se interrumpió la ejecución"
    } else {
      //Sino, regresa el array
      return array
    }
}

module.exports = breakStatement;
