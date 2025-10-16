const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 22 },
{ nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ];


    console.log(personas.filter(function(personas){
        if(edad > 18){
            return personas;
        }
    }));
    console.log(personas.map(function(edad){
        return edad * 2;
    }));
    console.log(personas.reduce(function(total,edad){
    return total + edad;
    }));
