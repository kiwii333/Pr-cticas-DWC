const body = document.getElementById('body') 

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((data) => {
        // Mostrar en consola el primer elemento del array `results`
        console.log(data.results[0]);
        // Mostrar en consola el campo `name.title` dentro de results[0]
        console.log(data.results[0].name.title);

        
        document.getElementById('body').innerHTML += `
        <img src="${data.results[0].picture.large}" alt="User Picture"><br>
        ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}<br>
        Email: ${data.results[0].email} <br>
        ${data.results[0].location.street.number} ${data.results[0].location.street.name}<br>
        ${data.results[0].location.city}`;

        

        

        body.appendChild(datos);
        
    })
    .catch(err => console.error('Fetch error:', err));


