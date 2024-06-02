const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  // Inicializamos el contador (debe de estar afuera del bucle)
  var suma = 0;

  for (let prop in objeto) {
    // Incrementamos el contador por cada propiedad
    suma++;
  }
  // Retornamos el total de propiedades
  return suma;
};

module.exports = contarPropiedades;
