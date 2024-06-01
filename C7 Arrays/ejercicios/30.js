function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  //USO DEL BUCLE DOBLE PARA COMPARAR ELEMENTOS
  //Comparar cada elemento del arreglo con todos los elementos siguientes
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        return numeros[i];
      }
    }
  }
  return undefined
}

module.exports = encontrarElementoRepetido;