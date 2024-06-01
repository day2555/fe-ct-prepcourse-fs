function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      mayores.push(array[i]);
    }
  }
  return mayores.length;
}

//ALTERNATIVA CON FILTER:
// function contarElementosMayoresA10(array) {
//   let mayores = array.filter(elemento => elemento > 10);
//   return mayores.length;
// }

module.exports = contarElementosMayoresA10;
