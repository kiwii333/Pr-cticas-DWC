

function button (evento){
    if (evento.type == "click"){
        const email = document.getElementById("email");
        alert(email);
        const arrEmail = [email];
        const contraseña = document.getElementById("pswd");
        const arrPswd = [contraseña];
        if(!arrEmail.includes("@")){
            var p = document.createElement('p');
            p.textContent('Error en el gmail');
            document.getElementById('label1').appendChild(p);
        }else{
        
        }if(arrPswd.length<8 | arrPswd>10){
            var p = document.createElement('p');
            p.textContent('Error en el gmail');
            document.getElementById('label2').appendChild(p);
        }

    }
}

document.getElementById("button").onclick = button










