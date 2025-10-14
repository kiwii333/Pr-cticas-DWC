const palabras = ['ana','radar','javascript','reconocer','oro','palindromo','salas'];
const palabra1 = ['a','n','a'];

var lastpos1 = palabra1[palabra1.length]
console.log(palabra1.length);

for (let i in palabra1){
    if(palabra1[i]==palabra1[palabra1.length-1]){
        console.log('La primera palabra es un paĺindromo')
        palabra1.length--;
    }

}

const palabra2 = ['r','a','d','a','r'];

for (let i in palabra2){
    if(palabra2[i]==palabra2[palabra2.length-1]){
        console.log('La segunda palabra es un paĺindromo')
        palabra2.length--;
    }

}
const palabra3 = ['j','a','v','a','s','c','r','i','p','t'];

for (let i in palabra3){
    if(palabra3[i]==palabra3[palabra3.length-1]){
        console.log('La tercera palabra es un paĺindromo')
        palabra3.length--;
    }

}

const palabra4 = ['r','e','c','o','n','o','c','e','r'];

for (let i in palabra4){
    if(palabra4[i]==palabra4[palabra4.length-1]){
        console.log('La tercera palabra es un paĺindromo')
        palabra4.length--;
    }

}

const palabra5 = 