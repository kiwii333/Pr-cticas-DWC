function primeraTarea(){
    return new Promise ((devolver) =>{
        let n = 10;
        devolver(n)
        
    })
}

function segundaTarea(){
    return new Promise ((multiplicar)=>{
        let mult = n * 2
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
    .then((devolver) =>{
        console.log(devolver)
    })

    .then((multiplicar)=>{
        console.log(multiplicar)
    })
   
    .then((sumar)=>{
        console.log(sumar)
    })