function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  //Null no es un string, es la palabra reservada null
  objeto[propiedad] = null;
  return objeto;

}

module.exports = agregarPropiedad;
