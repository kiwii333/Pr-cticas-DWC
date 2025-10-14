//5.2

var contenido_content = document.getElementById('p1').textContent;
var contenido_inner = document.getElementById('p1').innerHTML;
var log = document.getElementById('log');
log.innerHTML += contenido_content;
log.innerHTML += contenido_inner;
