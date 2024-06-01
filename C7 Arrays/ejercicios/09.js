function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   //Esto va a regresar el índice
   var random = Math.floor(Math.random() * array.length);
   //Le decimos que regrese el elemento en el índice indicado
   return array[random]
}

module.exports = obtenerElementoAleatorio;
