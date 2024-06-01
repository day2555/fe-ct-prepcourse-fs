function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   for (let i = 0; i < array.length; i++) {
      //Ahora encontrar la letra P: preguntar si la letra en la que se está iterando es igual a P
      if (array[i] === num) {
         return i
      }
   }
   //ES IMPORTANTE QUE ESTE RETURN ESTE FUERA DEL BUCLE, DE NO SER ASI VA A RETORNAR -1 SI EL PRIMERO NO COINCIDE
   return -1
}

module.exports = encontrarElemento;
