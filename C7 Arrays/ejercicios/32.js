function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var min = string.toLowerCase()
  var array = min.split('');
  var alreves = array.reverse();
  var unir = alreves.join('');
  console.log(unir)
  console.log(min)

  if (min === unir) {
    return true
  }
  else return false
}

module.exports = esPalindromo;