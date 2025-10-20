const prompt=require("prompt-sync")({sigint:true}); 

for(i=0;i>=100;i++){
  let palabras = [];
  var palabra = prompt("Escribe una palabra: ");
  console.log("Palabra: " + palabra);
  while(palabras.length<10){
    if(!palabras.includes(palabra)){
      palabras.push(palabra);
    }
  }
  palabras.reverse();
  console.log(palabras);
  
    
}




