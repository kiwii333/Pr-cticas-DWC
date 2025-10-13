const hombres = ['Carlos','Eustaquio','Alfredo','Alex','Julián'];
const edades = [14,65,76,20,39];
const mayoresDeEdad = [];

for (let i in hombres , edades){
    if(edades[i]>= 18){
        let mayores = hombres [i];
        mayoresDeEdad [i] = mayores;
        
    }
    console.log(mayoresDeEdad[i]);
}
    