const lista = document.getElementById('lista');

etch("https://jsonplaceholder.typicode.com/users")

.then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error(`HTTP error! status:${response.status}`);
    }

})

.then((data) =>{
    data.forEach((user) => {
        const lista = document.createElement('li');
        lista.textContent = `${user.name} / ${user.email}`
    });
    console.log('Datos recibidos:',data);
})

.catch((error)=> {
    console.error('Error en la petición',error);
});