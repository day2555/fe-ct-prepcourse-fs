function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;

  for (let i = a; i < b + 1; i++) {
    producto *= i
  }
  //**En JS la multiplicación entre números negativos y 0 retorna -0.**//
  //preguntar si el valor de producto es igual a -0, en ese caso devolverá 0 
  //y en caso de que no sea -0, simplemente devolverá lo que valga producto. 
  if (producto === -0) {
    return 0
  } else {
    return producto
  }
}


module.exports = productoEntreNúmeros;