function saludar(evento){
    if(evento.type == "click"){
        alert("Hola");
    }
}

function crear(evento){
    if(evento.type == "click"){
        alert("Nueva caja");
        
    }
}

function generar(evento){
    if(evento.type == "click"){
        let num = (Math.random()*100)+1;
        var p = document.createElement('p');
        p.textContent(num);
        document.getElementById('ol').appendChild(p);
    }
}

document.getElementById("saludo").onclick = saludar;
document.getElementById("generar").onclick = generar;
document.getElementById("crear").onclick = crear;