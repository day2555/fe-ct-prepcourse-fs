function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var producto = [];
  for (let i = 0; i < array.length; i++) {
    producto.push(array[i] * i);
  }
  return producto;
}

//ALTERNATIVA CON MAP
// function multiplicarElementosPorIndice(array) {
//   return array.map((elemento, indice) => elemento * indice);
// }

module.exports = multiplicarElementosPorIndice;
