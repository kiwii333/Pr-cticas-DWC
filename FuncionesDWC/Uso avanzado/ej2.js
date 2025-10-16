const productos =  [{ nombre: "Camiseta", precio: 20 }, { nombre:"Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ];
productos.forEach(function (productos){
    productos[productos.precio = productos.precio * 0.1 + productos.precio]
});

console.log(productos);