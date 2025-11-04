function promesa(){
    return new Promise((solución,error)=>{
        let n1= 2;
        let n2= 2;
        let suma = n1 + n2;
        if(n1 == int && n2 == int){
            solución(`El resultado es ${suma}`)
        }else{
            error (Error('Uno de los dígitos no es un número'))
        }
    })
}

promesa()
    .then((respuesta) =>{
        console.log(solución)
    })
    .catch((error) =>{
        console.log(error)
    })