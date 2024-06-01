function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  //convertir el string a arreglo.
  var array = texto.split('');
  array.reverse();
  var string = array.join('');
  return string;

}

module.exports = invertirTexto;
