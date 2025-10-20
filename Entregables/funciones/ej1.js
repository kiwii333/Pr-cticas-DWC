
const prompt=require("prompt-sync")({sigint:true}); 
var palabra;
let palabras  = new Set();
function pregunta(palabras){
  do{
    palabra = prompt("Introduce una palabra: ")
    console.log("Palabra: " + palabra);
    if(palabra){
      palabras.add(palabra);
    }if(palabra== " "){
      
    }
    const array=[...palabras];
    palabras.
    console.log(palabras);
  }while(palabra)
}


console.log(`Preguntas: ${pregunta(palabras)}`);



  




