/**
 * Esta funcion agregar un nuevo producto al carrito o si ya existe agrega 1 cantidad más.
 * @param {Object} product | Libro.
 * @param {Function} set | SetState del estado local.
 * @param {Array} arr | Items del carrito.
 */

function onAdd(product, set, arr){
    const exist = arr.find(x => x.isbn13 === product.isbn13);
    if(exist){
        set(prevState =>
            prevState.map(x =>
                x.isbn13 === product.isbn13 ? {...exist, qty: exist.qty + 1, price: priceX(exist.price, exist.qty, 'plus')} : x
            )
        );
    } else {
        set(prevState => [...prevState, {...product, qty: 1}]);
    }
};

/**
 * Esta funcion elimina un producto del carrito o si existe mas de 1, resta 1 en cantidad.
 * @param {Object} product | Libro.
 * @param {Function} set | SetState del estado local.
 * @param {Array} arr | Items del carrito.
 */

function onRemove(product, set, arr){
    const exist = arr.find((x) => x.isbn13 === product.isbn13);
    if (exist.qty === 1) {
      set(prevState => prevState.filter(x => x.isbn13 !== product.isbn13));
    } else {
      set(prevState =>
        prevState.map(x =>
          x.isbn13 === product.isbn13 ? {...exist, qty: exist.qty - 1, price: priceX(exist.price, exist.qty, 'subtract')} : x
        )
      );
    }
};

/**
 * Esta función hace las operaciones de suma y resta del mismo item en el carrito.
 * @param {String} price | Precio del producto
 * @param {Number} qty Cantidad del producto
 * @param {String} op Operador
 * @returns {String}
 */

function priceX(price, qty, op){
  const unit = Number(price.split('').splice(1,5).join('')) / qty;
  switch(op){
    case 'plus':
      return '$' + (unit * (qty + 1)).toFixed(2);

    case 'subtract':
      return '$' + (unit * (qty - 1)).toFixed(2);

    default:
      return price;
  }  
}

export { onAdd, onRemove };