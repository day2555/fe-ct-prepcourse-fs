function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var suma = arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma;
}

module.exports = agregarNumeros;
