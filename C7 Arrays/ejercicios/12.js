function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayus = array.map((num) => { return num.toUpperCase()});

  return mayus
}

module.exports = convertirStringAMayusculas;
