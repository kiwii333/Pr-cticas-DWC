//5.4
var i = 0;
while (i< precios.length){
    var valor = parseFloat(precios[i].textContent);
    valor = valor +0.1;
    precios[i].textContent = valor;
    i++
}
