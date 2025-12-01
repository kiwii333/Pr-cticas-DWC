usuarios = document.getElementById('div');


fetch('https://fakerapi.it/api/v2/persons?_quantity=1')

.then(response => {
    return response.json()
})

.then((data) =>{
    console.log(data.data)
    let datos = document.createElement('p');
    datos.texContent = 
    `${data.results(picture.large)} \n
    ${data.results(name.title)} ${data.results(first)} ${data.results(last)} \n
    ${data.results(email)}\n
    ${data.results(location.number)} ${data.results(location.city)} ${data.results(location.country)}` ;
    usuarios.appendChild(datos);
    })
;

