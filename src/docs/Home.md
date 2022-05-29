Este componente al montarse ejecuta la funcion landingBooks, que trae los primeros libros que van a estar
visibles en su primer visita al usuario.

Y renderiza, si esta cargando el componente NavBar y el componente Loading.
Si no esta cargando y el usuario esta autenticado, renderiza el componente NavBar y el componente Books.
Y si el usuario no esta autenticado, lo redirigimos a la página principal para que pueda iniciar sesión.