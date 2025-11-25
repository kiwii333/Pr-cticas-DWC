nombre = document.getElementById('nombre')

function promesa(){
    return new Promise((devolver,error)=>{
        if(nombre=='admin'){
            devolver('Usuario verificado correctamente')
        }else{
            error('Usuario no encontrado')
        }
    })
        
}

function verificarUsuario(nombre){
    dev
    return promesa()
        .then((devolver)=>{
            console.log(devolver)
        })
    
           
        
    
}
        
