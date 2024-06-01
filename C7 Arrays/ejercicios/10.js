function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  var str = array.find(num => num.length >= 5);
  return str
}

module.exports = obtenerPrimerStringLargo;
