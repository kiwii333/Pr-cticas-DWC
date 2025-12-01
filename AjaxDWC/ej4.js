const user = {
    name: 'Raul',
    job: 'DAW'
}

fetch('https://jsonplaceholder.typicode.com/posts.',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

.then(response=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('Error en el HTTP');
    }
})

.then(data=>{
    console.log('Respuesta:',data);
})
   
.catch(error=>{
    console.error('Error en la petición',error)

});    


