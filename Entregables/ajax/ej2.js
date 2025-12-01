const producto = document.getElementById('div')
const input = document.getElementById('id')
const body = document.getElementById('body')



function click (evento){
    if(evento.type == 'click'){
        fetch(`https://dummyjson.com/products/${input.value}`)
        .then((response)=>{
            if(!response.ok){
                let error = document.createElement('p')
                error.textContent = `Error${response.status}`
                body.appendChild(error)
                
            }
        return response.json();
        })

        .then((data)=>{
            let datos = document.createElement('div');
            datos.textContent = `id:${data.id}      , titulo:${data.title},       precio:${data.price}`
            body.appendChild(datos)
            
        
            return (fetch(`https://dummyjson.com/products/${input.value}`),{
                method:'POST',
                body:JSON.stringify({
                    id: data.id,
                    title: data.title,
                    precio: data.price
                })
            })
            
        
        
        })

        .then(response=>{
            return response
        })
            
        .then(data=>{
            console.log(data)
            let datos_post = document.createElement('p');
            datos_post.textContent = `Titulo ${data.title}`
            body.appendChild(datos_post)
        });

     /*    .then(post=>{
            let post = document.createElement('p')
            post.textContent = 'POST'
            body.appendChild(post)
        }) */

        

        
        
    }   
}

document.getElementById('button').onclick = click;



