function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  // // Crear un array con los strings no vacíos
  // var strings = [str1, str2, str3].filter(str => str !== "");

  // //juntar todos los strings del array en uno
  // var concat = strings.join("");

  // // Convertir la cadena a un array de caracteres
  // var array = concat.split('');

  // // Usar el método sort() con una función de comparación aleatoria
  // array.sort(() => Math.random() - 0.5);

  // // Convertir el array de caracteres nuevamente a una cadena
  // return array.join('');

}

module.exports = combine;