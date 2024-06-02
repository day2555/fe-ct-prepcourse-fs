function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  // objetoUsuario = {
  //   posts: [post: {
  //     likes: 1
  //   }, post: { likes: 2 
  //   }],
  // }
  // likes: propiedad/ key

  var suma = 0;
  for (var i = 0; i < objetoUsuario.posts.length; i++) {
    //Accedo al objeto, al arreglo y a cada una de las propiedades del arreglo
    suma += objetoUsuario.posts[i].likes
  }
  return suma
}

module.exports = sumarLikesDeUsuario;
