function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  //Va a comparar cada elemento con el primer elemento del array, asi compara que todos sean iguales.
  todosIguales = array.every(elemento => elemento === array[0]);

  return todosIguales;

  //Alternativa con for
  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] !== array[0]) {
  //     return false; // Si encuentra un elemento diferente, devuelve false
  //   }
  // }
  // return true; // Si no encuentra elementos diferentes, devuelve true

  
}

module.exports = todosIguales;
