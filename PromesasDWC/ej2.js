function primeraTarea(){
    return new Promise ((saludar) =>{
        let n = 10;
        saludar(n)
        
    })
}

function segundaTarea(){
    return new Promise ((multiplicar)=>{
        mult = n * 2
        multiplicar(mult)
        
    })
}
function terceraTarea(){
    return new Promise ((sumar)=>{
        sum = mult * 5
        sumar(sum)
    })
}

primeraTarea()
    .then((saludar) =>{
        console.log(saludar)
    })
segundaTarea()
    .then((multiplicar)=>{
        console.log(multiplicar)
    })
terceraTarea()    
    .then((sumar)=>{
        console.log(sumar)
    })