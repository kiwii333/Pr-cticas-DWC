const producto = document.getElementById('div')
const id = document.getElementById('id')
const body = document.getElementById('body')

function click (evento){
    if(evento.type == 'click'){
        fetch(`https://dummyjson.com/products/${id.value}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error (`Error 404`)
            }
        return response.json();
        })

        .then((data)=>{
            let datos = document.createElement('div');
            datos.textContent = `id:${data.id}      , titulo:${data.title},       precio:${data.price}`
            body.appendChild(datos)
            
        })
        
    }   
}

document.getElementById('button').onclick = click;


fetch('https://httpbin.org/post'),{
    method:'POST',
        body:JSON.stringify(data.id,data.title,data.price)
}
.then(response=>{
    return response
})
.then(data=>{
    let datos_post = document.createElement('p');
    datos_post.textContent = `Titulo ${data.title}`
    body.appendChild(datos_post)
});
