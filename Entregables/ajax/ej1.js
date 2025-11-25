fetch('https://fakerapi.it/api/v2/persons?_quantity=1')

.then(response => {
    return response.json()
});

